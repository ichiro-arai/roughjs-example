import {SysvisVisitor} from "@/generated/SysvisVisitor"
import {
    AssignContext,
    AssignmentsContext,
    AttrContext,
    ClusterContext,
    EdgeContext,
    FrameContext,
    NodeContext,
    StatementsContext,
    StmtContext,
    StoryContext,
    SysvisParser
} from './generated/SysvisParser'
import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts'
import {SysvisLexer} from './generated/SysvisLexer';
import {AbstractParseTreeVisitor} from "antlr4ts/tree";

interface Result {
    statementType: StatementType
}

enum StatementType {
    Story,
    Frame,
    Statements,
    Cluster,
    Node,
    Edge,
    Attribute,
    Assignment,
    Assignments
}

export interface Story {
    frames: Frame[]
}

export interface Frame {
    statements: StatementList
}

export interface StatementList {
    places: Place[]
    edges: Edge[]
    attributes: Attribute[]
    assignments: Assignment[]
}

export interface Place {
    id: PlaceId
}

type PlaceId = string

export interface Cluster extends Place {
    statements: StatementList
}

export interface Node extends Place {
    assignments: Assignment[]
}

export interface Edge {
    from: PlaceId
    to: PlaceId,
    assignments: Assignment[]
}

export interface Attribute {
    target: string
    assignments: Assignment[]
}

interface Assignments {
    assignments: Assignment[]
}

export interface Assignment {
    key: string
    value: string
}


const example = `
cluster clients {
  type='client';
  c1;
  c2;
};

cluster kvs {
  type='server';
  node [shape='cylinder'];
  s1;
  s2;
  s3;
  hinted_hand_off[shape='box'];
};
---
c1 -> s1 [label='write x=1', style=dotted];
c1 -> s2 [label='write x=1'];
s1[label='x=1'];
s2[label='x=1'];
---
c2[label='x=1'];
c2 -> s2 [label='read x=1'];
`
const result = SysvisBuilder.build(example)
console.log(JSON.stringify(result))





export class SysvisBuilder  extends AbstractParseTreeVisitor<Result> implements SysvisVisitor<Result>{

    public static build(input: string): Result {
        const inputStream = new ANTLRInputStream(input)
        const lexer = new SysvisLexer(inputStream)
        const tokenStream = new CommonTokenStream(lexer)
        const parser = new SysvisParser(tokenStream)
        const tree: StoryContext = parser.story()
        return new SysvisBuilder().visit(tree)
    }

    protected defaultResult(): Result {
        throw 'FIXME'
    }

    public visitAssign(ctx: AssignContext): Result {
        const ids = ctx.ID().map(id => id.text)
        return {
            statementType: StatementType.Assignment,
            key: ids[0],
            value: ids[1]
        } as Assignment & Result
    }

    public visitAssignments(ctx: AssignmentsContext): Result {
        return {
            statementType: StatementType.Assignments,
            assignments: ctx.assign().map(c => this.visit(c) as Assignment & Result)
        } as Assignments & Result
    }

    public visitAttr(ctx: AttrContext): Result {
        const target = ctx.CLUSTER() || ctx.NODE() || ctx.EDGE()
        if (target === undefined) {
            throw 'FIXME'
        }
        const assignments = this.visit(ctx.assignments()) as Assignments & Result
        return {
            statementType: StatementType.Attribute,
            target: target.text.toLowerCase(),
            assignments: assignments
        } as Attribute & Result
    }

    public visitCluster(ctx: ClusterContext): Result {
        return {
            statementType: StatementType.Cluster,
            id: {
                stringValue: ctx.ID().text
            } as PlaceId,
            statements: this.visit(ctx.statements()) as StatementList & Result
        } as Cluster & Result

    }

    public visitEdge(ctx: EdgeContext) : Result {
        const ids = ctx.ID().map(s => s.text)
        const children = ctx.assignments()
        const visited = children ? this.visit(children) as Assignments & Result : {assignments: []}
        return {
            statementType: StatementType.Edge,
            from: ids[0],
            to: ids[1],
            assignments: visited.assignments
        } as Edge & Result
    }

    public visitFrame (ctx: FrameContext) :Result {
        return {
            statementType: StatementType.Frame,
            statements: this.visit(ctx.statements()) as StatementList & Result
        } as Frame & Result
    }

    public visitNode (ctx: NodeContext): Result {
        const visited = this.visit(ctx.assignments()) as Assignments & Result
        return {
            statementType: StatementType.Node,
            id: ctx.ID().text,
            assignments: visited.assignments
        } as Node & Result
    }

    public visitStatements (ctx: StatementsContext) :Result{
        const statement = {
            statementType: StatementType.Statements,
            places: [],
            edges: [],
            attributes: [],
            assignments: []
        } as StatementList & Result

        ctx.stmt().map(s => this.visit(s)).forEach( visited => {
            switch (visited.statementType) {
                case StatementType.Node:
                    statement.places.push(visited as Node & Result)
                    break
                case StatementType.Cluster:
                    statement.places.push(visited as Cluster & Result)
                    break
                case StatementType.Edge:
                    statement.edges.push(visited as Edge & Result)
                    break
                case StatementType.Attribute:
                    statement.attributes.push(visited as Attribute & Result)
                    break
                case StatementType.Assignment:
                    statement.assignments.push(visited as Assignment & Result)
                    break
            }
        })
        return statement
    }
    public visitStmt (ctx: StmtContext) : Result{
        const child =
            ctx.node() ||
            ctx.edge() ||
            ctx.attr() ||
            ctx.assign() ||
            ctx.cluster()
        if (child === undefined) {
            throw 'internal error'
        } else {
            return this.visit(child)
        }
    }

    public visitStory (ctx: StoryContext): Result {
        return {
            frames: ctx.frame().map(c => this.visit(c) as Frame & Result),
            statementType: StatementType.Story
        } as Story & Result
    }
}
