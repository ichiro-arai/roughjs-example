import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

import {SysvisVisitor} from "@/generated/SysvisVisitor";
import {
    AssignmentContext,
    Attr_listContext,
    Attr_stmtContext,
    ClusterContext,
    Edge_stmtContext,
    FrameContext, Node_stmtContext, Stmt_listContext, StmtContext, StoryContext, SysvisParser
} from '@/generated/SysvisParser';
import {ErrorNode, ParseTree, RuleNode, TerminalNode} from "antlr4ts/tree";
import {SysvisLexer} from "@/generated/SysvisLexer";

export class Story {
    frames:
}

Story = namedtuple('Story', ('frames',))
Node = namedtuple('Node', ('node_id', 'assignments'))
Edge = namedtuple('Edge', ('tail_id', 'op', 'head_id', 'assignments'))
Attribute = namedtuple('Attributes', ('element', 'assignments'))
Assignment = namedtuple('Assignment', ('key', 'value'))
Cluster = namedtuple('Cluster', ('cluster_id', 'statement_list'))




export class SysvisTokenizer implements SysvisVisitor<any> {
    public static tokenize(input: string) {
        const inputStream = new ANTLRInputStream(input)
        const lexer = new SysvisLexer(inputStream)
        const tokenStream = new CommonTokenStream(lexer)
        const parser = new SysvisParser(tokenStream)
        const tree = parser.story()
        return new SysvisTokenizer().visit(tree)
    }

    public visitAssignment(ctx: AssignmentContext) {

    }
    public visitAttr_list(ctx: Attr_listContext) {

    }
    public visitAttr_stmt (ctx: Attr_stmtContext) {

    }
    public visitCluster(ctx: ClusterContext): any {

    }
    public visitEdge_stmt(ctx: Edge_stmtContext): any {

    }
    public visitFrame (ctx: FrameContext): any {

    }
    public visitNode_stmt (ctx: Node_stmtContext): any {

    }
    public visitStmt (ctx: StmtContext): any {}
    public visitStmt_list (ctx: Stmt_listContext): any {

    }
    public visitStory (ctx: StoryContext): any {}

    public visit(tree: ParseTree): any {
        return undefined;
    }

    visitChildren(node: RuleNode): any {
        return undefined;
    }

    visitErrorNode(node: ErrorNode): any {
        return undefined;
    }

    visitTerminal(node: TerminalNode): any {
        return undefined;
    }
}