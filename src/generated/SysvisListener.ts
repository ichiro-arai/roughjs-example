// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SysvisParser`.
 */
export interface SysvisListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SysvisParser.story`.
	 * @param ctx the parse tree
	 */
	enterStory?: (ctx: StoryContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.story`.
	 * @param ctx the parse tree
	 */
	exitStory?: (ctx: StoryContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.frame`.
	 * @param ctx the parse tree
	 */
	enterFrame?: (ctx: FrameContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.frame`.
	 * @param ctx the parse tree
	 */
	exitFrame?: (ctx: FrameContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	enterStmt_list?: (ctx: Stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	exitStmt_list?: (ctx: Stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	enterAttr_stmt?: (ctx: Attr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	exitAttr_stmt?: (ctx: Attr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.attr_list`.
	 * @param ctx the parse tree
	 */
	enterAttr_list?: (ctx: Attr_listContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.attr_list`.
	 * @param ctx the parse tree
	 */
	exitAttr_list?: (ctx: Attr_listContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	enterEdge_stmt?: (ctx: Edge_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	exitEdge_stmt?: (ctx: Edge_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	enterNode_stmt?: (ctx: Node_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	exitNode_stmt?: (ctx: Node_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.cluster`.
	 * @param ctx the parse tree
	 */
	enterCluster?: (ctx: ClusterContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.cluster`.
	 * @param ctx the parse tree
	 */
	exitCluster?: (ctx: ClusterContext) => void;
}

