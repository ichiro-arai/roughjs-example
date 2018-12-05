// Generated from Sysvis.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SysvisLexer extends Lexer {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"NODE", "EDGE", "CLUSTER", "ID", "SPACES",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "';'", "'['", "','", "']'", "'='", "'->'", "'{'", 
		"'}'", "'node'", "'edge'", "'cluster'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NODE", "EDGE", "CLUSTER", "ID", "SPACES",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SysvisLexer._LITERAL_NAMES, SysvisLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SysvisLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SysvisLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Sysvis.g4"; }

	// @Override
	public get ruleNames(): string[] { return SysvisLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SysvisLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return SysvisLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 12:
			this.ID_action(_localctx, actionIndex);
			break;
		}
	}
	private ID_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.text = this.text.slice(0, -1)
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x10\\\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x07\x0EI\n\x0E\f\x0E\x0E\x0EL\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0ER\n\x0E\f\x0E\x0E\x0EU\v\x0E\x05\x0EW\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02\x06\x03\x02" +
		"))\x05\x02C\\aac|\x06\x022;C\\aac|\x05\x02\v\r\x0F\x0F\"\"^\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05#\x03\x02" +
		"\x02\x02\x07%\x03\x02\x02\x02\t\'\x03\x02\x02\x02\v)\x03\x02\x02\x02\r" +
		"+\x03\x02\x02\x02\x0F-\x03\x02\x02\x02\x110\x03\x02\x02\x02\x132\x03\x02" +
		"\x02\x02\x154\x03\x02\x02\x02\x179\x03\x02\x02\x02\x19>\x03\x02\x02\x02" +
		"\x1BV\x03\x02\x02\x02\x1DX\x03\x02\x02\x02\x1F \x07/\x02\x02 !\x07/\x02" +
		"\x02!\"\x07/\x02\x02\"\x04\x03\x02\x02\x02#$\x07=\x02\x02$\x06\x03\x02" +
		"\x02\x02%&\x07]\x02\x02&\b\x03\x02\x02\x02\'(\x07.\x02\x02(\n\x03\x02" +
		"\x02\x02)*\x07_\x02\x02*\f\x03\x02\x02\x02+,\x07?\x02\x02,\x0E\x03\x02" +
		"\x02\x02-.\x07/\x02\x02./\x07@\x02\x02/\x10\x03\x02\x02\x0201\x07}\x02" +
		"\x021\x12\x03\x02\x02\x0223\x07\x7F\x02\x023\x14\x03\x02\x02\x0245\x07" +
		"p\x02\x0256\x07q\x02\x0267\x07f\x02\x0278\x07g\x02\x028\x16\x03\x02\x02" +
		"\x029:\x07g\x02\x02:;\x07f\x02\x02;<\x07i\x02\x02<=\x07g\x02\x02=\x18" +
		"\x03\x02\x02\x02>?\x07e\x02\x02?@\x07n\x02\x02@A\x07w\x02\x02AB\x07u\x02" +
		"\x02BC\x07v\x02\x02CD\x07g\x02\x02DE\x07t\x02\x02E\x1A\x03\x02\x02\x02" +
		"FJ\x07)\x02\x02GI\n\x02\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH" +
		"\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02" +
		"MN\x07)\x02\x02NW\b\x0E\x02\x02OS\t\x03\x02\x02PR\t\x04\x02\x02QP\x03" +
		"\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TW\x03" +
		"\x02\x02\x02US\x03\x02\x02\x02VF\x03\x02\x02\x02VO\x03\x02\x02\x02W\x1C" +
		"\x03\x02\x02\x02XY\t\x05\x02\x02YZ\x03\x02\x02\x02Z[\b\x0F\x03\x02[\x1E" +
		"\x03\x02\x02\x02\x06\x02JSV\x04\x03\x0E\x02\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SysvisLexer.__ATN) {
			SysvisLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SysvisLexer._serializedATN));
		}

		return SysvisLexer.__ATN;
	}

}

