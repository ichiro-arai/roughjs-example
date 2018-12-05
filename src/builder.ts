import { SysvisVisitor } from "@/generated/SysvisVisitor"
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { AssignmentContext, SysvisParser, Attr_listContext, Attr_stmtContext, ClusterContext, Edge_stmtContext, FrameContext, Node_stmtContext, StmtContext, Stmt_listContext, StoryContext } from './generated/SysvisParser'
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { SysvisLexer } from './generated/SysvisLexer';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {AbstractParseTreeVisitor} from "antlr4ts/tree";

interface Result {
    statementType: StatementType
}

enum StatementType {
    Story,
    Frame,
    StatementList,
    Cluster,
    Node,
    Edge,
    Attribute,
    Assignment,
    AssignmentList
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

export interface PlaceId {
    stringValue: string
}

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

interface AssignmentList {
    assignments: Assignment[]
}

export interface Assignment {
    key: string
    value: string
}




export class SysvisBuilder  extends AbstractParseTreeVisitor<Result> implements SysvisVisitor<Result>{

    public static build(input: string): Result {
        const inputStream = new ANTLRInputStream(input)
        const lexer = new SysvisLexer(inputStream)
        const tokenStream = new CommonTokenStream(lexer)
        const parser = new SysvisParser(tokenStream)
        const tree: StoryContext = parser.story()
        return new SysvisBuilder().visit(tree)
    }

    public visitStory (ctx: StoryContext): Result {



        return {
            frames: ,
            statementType: StatementType.Story
        } as Story & Result
    }

    public visitFrame (ctx: FrameContext): Result {
        return {
            statementType: StatementType.Frame,
            statements: this.visit(ctx.stmt_list()) as StatementList & Result
        } as Frame & Result
    }


    public visitStmt_list (ctx: Stmt_listContext): Result {
        const statement = {
            statementType: StatementType.StatementList,
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

    public visitStmt (ctx: StmtContext): Result {
        const child =
            ctx.node_stmt() ||
            ctx.edge_stmt() ||
            ctx.attr_stmt() ||
            ctx.assignment() ||
            ctx.cluster()
        if (child === undefined) {
            throw 'FIXME' // FIXME
        } else {
            return this.visit(child)
        }
    }

    public visitAttr_stmt (ctx: Attr_stmtContext):Result {
        const target = ctx.CLUSTER() || ctx.NODE() || ctx.EDGE()
        if (target === undefined) {
            throw 'FIXME'
        }
        const assignments = this.visit(ctx.attr_list()) as AssignmentList & Result
        //const assignments = attrList.assignment().map(c => this.visit(c) as Assignment & Result)
        return {
            statementType: StatementType.Attribute,
            target: target.text.toLowerCase(),
            assignments: assignments
        } as Attribute & Result
    }

    public visitAttr_list(ctx: Attr_listContext):Result {
        return {
            statementType: StatementType.AssignmentList,
            assignments: ctx.assignment().map(s => this.visit(s)as Assignment & Result)
        } as AssignmentList & Result
    }

    public visitAssignment(ctx: AssignmentContext): Result {
        const ids = ctx.ID().map(id => id.text)
        return {
            statementType: StatementType.Assignment,
            key: ids[0],
            value: ids[1]
        } as Assignment & Result
    }

    public visitCluster(ctx: ClusterContext): Result {
        const statementList = ctx.stmt_list()
        const visited = this.visit(statementList) as StatementList & Result
        return {
            statementType: StatementType.Cluster,
            id: {
                stringValue: ctx.ID().text
            } as PlaceId,
            statements: visited
        } as Cluster & Result

    }

    public visitEdge_stmt(ctx: Edge_stmtContext): Result {
        const ids = ctx.ID().map(s => s.text)
        const attrList = ctx.attr_list()
        if (attrList === undefined) {
            throw 'FIXME'
        }
        attrList.assignment()

        const visited = this.visit(attrList) as AssignmentList & Result
        return {
            statementType: StatementType.Edge,
            from: ids[0],
            to: ids[1],



        } as Edge & Result



    }
    public visitNode_stmt (ctx: Node_stmtContext): any {

    }
    protected defaultResult(): Result {
        throw 'FIXME'
    }

/*
    public visit(tree: ParseTree): Result {
        return tree.accept(this)
    }

    visitChildren(node: RuleNode): Result {
        return undefined;
    }

    visitErrorNode(node: ErrorNode): Result {
        return undefined;
    }

    visitTerminal(node: TerminalNode): Result {
        return undefined;
    }
 */

}
/*
class StoryVisitor extends AbstractParseTreeVisitor<Story> {
    protected defaultResult(): Story {
        return {frames:[], id: {stringValue: ''} as PlaceId} as (Story | Place)
    }
}

class FrameVisitor extends AbstractParseTreeVisitor<Frame> implements SysvisVisitor<Frame> {
    protected defaultResult(): Frame {
        return {
            statements: {
                places: [],
                edges: [],
                attributes: [],
                assignments: []
            }
        }
    }
}

class StatementListVisitor extends AbstractParseTreeVisitor<StatementList> {
    protected defaultResult(): StatementList {
        return {
            places: [],
            edges: [],
            attributes: [],
            assignments: []
        };
    }
}
*/
