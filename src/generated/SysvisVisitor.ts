// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StoryContext } from "./SysvisParser";
import { FrameContext } from "./SysvisParser";
import { Stmt_listContext } from "./SysvisParser";
import { StmtContext } from "./SysvisParser";
import { Attr_stmtContext } from "./SysvisParser";
import { Attr_listContext } from "./SysvisParser";
import { AssignmentContext } from "./SysvisParser";
import { Edge_stmtContext } from "./SysvisParser";
import { Node_stmtContext } from "./SysvisParser";
import { ClusterContext } from "./SysvisParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SysvisParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SysvisVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SysvisParser.story`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStory?: (ctx: StoryContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.frame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrame?: (ctx: FrameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_list?: (ctx: Stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.attr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_stmt?: (ctx: Attr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.attr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_list?: (ctx: Attr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.edge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_stmt?: (ctx: Edge_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.node_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_stmt?: (ctx: Node_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.cluster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCluster?: (ctx: ClusterContext) => Result;
}

