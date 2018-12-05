/*
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
*/

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


var antlr4 = require('antlr4/index')
var SysvisLexer = require('./generated/SysvisLexer').SysvisLexer
var SysvisParser = require('./generated/SysvisParser').SysvisParser;
var SysvisVisitor = require('./generated/SisvisVisitor')
var MyVisitor = require('./generated/SisvisVisitor').SysvisVistor


function Visitor () {
    SysvisVisitor.call(this);
    return this;
};

Visitor.prototype = Object.create(MyVisitor.prototype);
Visitor.prototype.constructor = Visitor;


Visitor.prototype.visitAssign =function(ctx: any): Result {
    const ids = ctx.ID().map(id => id.text)
    return {
        statementType: StatementType.Assignment,
        key: ids[0],
        value: ids[1]
    } as Assignment & Result
}

Visitor.prototype.visitAssignments = function(ctx: any): Result {
    return {
        statementType: StatementType.Assignments,
        assignments: ctx.assign().map(c => this.visit(c) as Assignment & Result)
    } as Assignments & Result
}

Visitor.prototype.visitAttr = function(ctx: any): Result {
    const target = ctx.CLUSTER() || ctx.NODE() || ctx.EDGE()
    if (target === undefined) {
        throw 'FIXME'
    }
    return {
        statementType: StatementType.Attribute,
        target: target.text.toLowerCase(),
        assignments: this.visit(ctx.assignments())
    } as Attribute & Result
}

Visitor.prototype.visitCluster = function(ctx: any): Result {
    return {
        statementType: StatementType.Cluster,
        id: ctx.ID().text,
        statements: this.visit(ctx.statements()) as StatementList & Result
    } as Cluster & Result

}

Visitor.prototype.visitEdge = function(ctx: any) : Result {
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

Visitor.prototype.visitFrame  = function(ctx: any) :Result {
    return {
        statementType: StatementType.Frame,
        statements: this.visit(ctx.statements()) as StatementList & Result
    } as Frame & Result
}

Visitor.prototype.visitNode  = function(ctx: any): Result {
    const visited = this.visit(ctx.assignments()) as Assignments & Result
    return {
        statementType: StatementType.Node,
        id: ctx.ID().text,
        assignments: visited.assignments
    } as Node & Result
}

Visitor.prototype.visitStatements = function (ctx: any) : Result  {
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

Visitor.prototype.visitStmt = function(ctx: any) : Result{
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

Visitor.prototype.visitStory = function(ctx: any): Result {
    return {
        frames: ctx.frame().map(c => this.visit(c) as Frame & Result),
        statementType: StatementType.Story
    } as Story & Result
}

export class Builder {

    public static build(input: string): Result {
        var chars = new antlr4.InputStream(input)
        var lexer = new SysvisLexer(chars)
        var tokens = new antlr4.CommonTokenStream(lexer)
        var parser = new SysvisParser(tokens)
        var visitor = Visitor()
        var tree = parser.story()
        return visitor.visit(tree)
    }

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
const result = Builder.build(example)
console.log(JSON.stringify(result))


