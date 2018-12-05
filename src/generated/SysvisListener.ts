// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `SysvisParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

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
	 * Enter a parse tree produced by `SysvisParser.attr`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.attr`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.assignments`.
	 * @param ctx the parse tree
	 */
	enterAssignments?: (ctx: AssignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.assignments`.
	 * @param ctx the parse tree
	 */
	exitAssignments?: (ctx: AssignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.edge`.
	 * @param ctx the parse tree
	 */
	enterEdge?: (ctx: EdgeContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.edge`.
	 * @param ctx the parse tree
	 */
	exitEdge?: (ctx: EdgeContext) => void;

	/**
	 * Enter a parse tree produced by `SysvisParser.node`.
	 * @param ctx the parse tree
	 */
	enterNode?: (ctx: NodeContext) => void;
	/**
	 * Exit a parse tree produced by `SysvisParser.node`.
	 * @param ctx the parse tree
	 */
	exitNode?: (ctx: NodeContext) => void;

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

