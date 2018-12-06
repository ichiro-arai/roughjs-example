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


var antlr4 = require('antlr4/index')
var SysvisLexer = require('./generated/SysvisLexer').SysvisLexer
var SysvisParser = require('./generated/SysvisParser').SysvisParser;
var SysvisVisitor = require('./generated/SysvisVisitor')
var Visitor = require('./Visitor');


export class Builder {

    public static build(input: string): any {
        var chars = new antlr4.InputStream(input)
        var lexer = new SysvisLexer(chars)
        var tokens = new antlr4.CommonTokenStream(lexer)
        var parser = new SysvisParser(tokens)
        var visitor = new Visitor.Visitor()
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
console.log(JSON.stringify(result, null, 2))


