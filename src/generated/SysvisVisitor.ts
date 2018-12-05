// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StoryContext } from "./SysvisParser";
import { FrameContext } from "./SysvisParser";
import { StatementsContext } from "./SysvisParser";
import { StmtContext } from "./SysvisParser";
import { AttrContext } from "./SysvisParser";
import { AssignmentsContext } from "./SysvisParser";
import { AssignContext } from "./SysvisParser";
import { EdgeContext } from "./SysvisParser";
import { NodeContext } from "./SysvisParser";
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
	 * Visit a parse tree produced by `SysvisParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignments?: (ctx: AssignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.edge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge?: (ctx: EdgeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode?: (ctx: NodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysvisParser.cluster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCluster?: (ctx: ClusterContext) => Result;
}

