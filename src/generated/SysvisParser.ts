// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SysvisListener } from "./SysvisListener";
import { SysvisVisitor } from "./SysvisVisitor";


export class SysvisParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly NODE = 10;
	public static readonly EDGE = 11;
	public static readonly CLUSTER = 12;
	public static readonly ID = 13;
	public static readonly SPACES = 14;
	public static readonly RULE_story = 0;
	public static readonly RULE_frame = 1;
	public static readonly RULE_stmt_list = 2;
	public static readonly RULE_stmt = 3;
	public static readonly RULE_attr_stmt = 4;
	public static readonly RULE_attr_list = 5;
	public static readonly RULE_assignment = 6;
	public static readonly RULE_edge_stmt = 7;
	public static readonly RULE_node_stmt = 8;
	public static readonly RULE_cluster = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "frame", "stmt_list", "stmt", "attr_stmt", "attr_list", "assignment", 
		"edge_stmt", "node_stmt", "cluster",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "';'", "'['", "','", "']'", "'='", "'->'", "'{'", 
		"'}'", "'node'", "'edge'", "'cluster'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NODE", "EDGE", "CLUSTER", "ID", "SPACES",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SysvisParser._LITERAL_NAMES, SysvisParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SysvisParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Sysvis.g4"; }

	// @Override
	public get ruleNames(): string[] { return SysvisParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SysvisParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SysvisParser._ATN, this);
	}
	// @RuleVersion(0)
	public story(): StoryContext {
		let _localctx: StoryContext = new StoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SysvisParser.RULE_story);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.frame();
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SysvisParser.T__0) {
				{
				{
				this.state = 21;
				this.match(SysvisParser.T__0);
				this.state = 22;
				this.frame();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SysvisParser.T__1) {
				{
				this.state = 28;
				this.match(SysvisParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frame(): FrameContext {
		let _localctx: FrameContext = new FrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SysvisParser.RULE_frame);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SysvisParser.RULE_stmt_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.stmt();
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 34;
					this.match(SysvisParser.T__1);
					this.state = 35;
					this.stmt();
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 41;
				this.match(SysvisParser.T__1);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SysvisParser.RULE_stmt);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.node_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.edge_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				this.attr_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.assignment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 48;
				this.cluster();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_stmt(): Attr_stmtContext {
		let _localctx: Attr_stmtContext = new Attr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SysvisParser.RULE_attr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SysvisParser.NODE) | (1 << SysvisParser.EDGE) | (1 << SysvisParser.CLUSTER))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 52;
			this.attr_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SysvisParser.RULE_attr_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(SysvisParser.T__2);
			this.state = 55;
			this.assignment();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SysvisParser.T__3) {
				{
				{
				this.state = 56;
				this.match(SysvisParser.T__3);
				this.state = 57;
				this.assignment();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(SysvisParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SysvisParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(SysvisParser.ID);
			this.state = 66;
			this.match(SysvisParser.T__5);
			this.state = 67;
			this.match(SysvisParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_stmt(): Edge_stmtContext {
		let _localctx: Edge_stmtContext = new Edge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SysvisParser.RULE_edge_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(SysvisParser.ID);
			this.state = 70;
			this.match(SysvisParser.T__6);
			this.state = 71;
			this.match(SysvisParser.ID);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SysvisParser.T__2) {
				{
				this.state = 72;
				this.attr_list();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_stmt(): Node_stmtContext {
		let _localctx: Node_stmtContext = new Node_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SysvisParser.RULE_node_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(SysvisParser.ID);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SysvisParser.T__2) {
				{
				this.state = 76;
				this.attr_list();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cluster(): ClusterContext {
		let _localctx: ClusterContext = new ClusterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SysvisParser.RULE_cluster);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(SysvisParser.CLUSTER);
			this.state = 80;
			this.match(SysvisParser.ID);
			this.state = 81;
			this.match(SysvisParser.T__7);
			this.state = 82;
			this.stmt_list();
			this.state = 83;
			this.match(SysvisParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x10X\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x07\x02\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x05\x02 \n\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E\x04*\v" +
		"\x04\x03\x04\x05\x04-\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x054\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07=\n\x07\f\x07\x0E\x07@\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x05\tL\n\t\x03\n\x03\n\x05\nP\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x03\x03\x02\f\x0E" +
		"X\x02\x16\x03\x02\x02\x02\x04!\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b" +
		"3\x03\x02\x02\x02\n5\x03\x02\x02\x02\f8\x03\x02\x02\x02\x0EC\x03\x02\x02" +
		"\x02\x10G\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16" +
		"\x1B\x05\x04\x03\x02\x17\x18\x07\x03\x02\x02\x18\x1A\x05\x04\x03\x02\x19" +
		"\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B" +
		"\x1C\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E" +
		" \x07\x04\x02\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03" +
		"\x02\x02\x02!\"\x05\x06\x04\x02\"\x05\x03\x02\x02\x02#(\x05\b\x05\x02" +
		"$%\x07\x04\x02\x02%\'\x05\b\x05\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02" +
		"(&\x03\x02\x02\x02()\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"+-\x07\x04\x02\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-\x07\x03\x02\x02" +
		"\x02.4\x05\x12\n\x02/4\x05\x10\t\x0204\x05\n\x06\x0214\x05\x0E\b\x022" +
		"4\x05\x14\v\x023.\x03\x02\x02\x023/\x03\x02\x02\x0230\x03\x02\x02\x02" +
		"31\x03\x02\x02\x0232\x03\x02\x02\x024\t\x03\x02\x02\x0256\t\x02\x02\x02" +
		"67\x05\f\x07\x027\v\x03\x02\x02\x0289\x07\x05\x02\x029>\x05\x0E\b\x02" +
		":;\x07\x06\x02\x02;=\x05\x0E\b\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02" +
		"><\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"AB\x07\x07\x02\x02B\r\x03\x02\x02\x02CD\x07\x0F\x02\x02DE\x07\b\x02\x02" +
		"EF\x07\x0F\x02\x02F\x0F\x03\x02\x02\x02GH\x07\x0F\x02\x02HI\x07\t\x02" +
		"\x02IK\x07\x0F\x02\x02JL\x05\f\x07\x02KJ\x03\x02\x02\x02KL\x03\x02\x02" +
		"\x02L\x11\x03\x02\x02\x02MO\x07\x0F\x02\x02NP\x05\f\x07\x02ON\x03\x02" +
		"\x02\x02OP\x03\x02\x02\x02P\x13\x03\x02\x02\x02QR\x07\x0E\x02\x02RS\x07" +
		"\x0F\x02\x02ST\x07\n\x02\x02TU\x05\x06\x04\x02UV\x07\v\x02\x02V\x15\x03" +
		"\x02\x02\x02\n\x1B\x1F(,3>KO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SysvisParser.__ATN) {
			SysvisParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SysvisParser._serializedATN));
		}

		return SysvisParser.__ATN;
	}

}

export class StoryContext extends ParserRuleContext {
	public frame(): FrameContext[];
	public frame(i: number): FrameContext;
	public frame(i?: number): FrameContext | FrameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameContext);
		} else {
			return this.getRuleContext(i, FrameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_story; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterStory) {
			listener.enterStory(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitStory) {
			listener.exitStory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitStory) {
			return visitor.visitStory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_frame; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterFrame) {
			listener.enterFrame(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitFrame) {
			listener.exitFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitFrame) {
			return visitor.visitFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitStmt_list) {
			listener.exitStmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitStmt_list) {
			return visitor.visitStmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public node_stmt(): Node_stmtContext | undefined {
		return this.tryGetRuleContext(0, Node_stmtContext);
	}
	public edge_stmt(): Edge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Edge_stmtContext);
	}
	public attr_stmt(): Attr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Attr_stmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public cluster(): ClusterContext | undefined {
		return this.tryGetRuleContext(0, ClusterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_stmt; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_stmtContext extends ParserRuleContext {
	public attr_list(): Attr_listContext {
		return this.getRuleContext(0, Attr_listContext);
	}
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(SysvisParser.CLUSTER, 0); }
	public NODE(): TerminalNode | undefined { return this.tryGetToken(SysvisParser.NODE, 0); }
	public EDGE(): TerminalNode | undefined { return this.tryGetToken(SysvisParser.EDGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_attr_stmt; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterAttr_stmt) {
			listener.enterAttr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitAttr_stmt) {
			listener.exitAttr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitAttr_stmt) {
			return visitor.visitAttr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitAttr_list) {
			listener.exitAttr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitAttr_list) {
			return visitor.visitAttr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SysvisParser.ID);
		} else {
			return this.getToken(SysvisParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_stmtContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SysvisParser.ID);
		} else {
			return this.getToken(SysvisParser.ID, i);
		}
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_edge_stmt; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterEdge_stmt) {
			listener.enterEdge_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitEdge_stmt) {
			listener.exitEdge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitEdge_stmt) {
			return visitor.visitEdge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_stmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SysvisParser.ID, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_node_stmt; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterNode_stmt) {
			listener.enterNode_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitNode_stmt) {
			listener.exitNode_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitNode_stmt) {
			return visitor.visitNode_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClusterContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(SysvisParser.CLUSTER, 0); }
	public ID(): TerminalNode { return this.getToken(SysvisParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SysvisParser.RULE_cluster; }
	// @Override
	public enterRule(listener: SysvisListener): void {
		if (listener.enterCluster) {
			listener.enterCluster(this);
		}
	}
	// @Override
	public exitRule(listener: SysvisListener): void {
		if (listener.exitCluster) {
			listener.exitCluster(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysvisVisitor<Result>): Result {
		if (visitor.visitCluster) {
			return visitor.visitCluster(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


