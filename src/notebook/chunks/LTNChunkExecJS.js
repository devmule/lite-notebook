import {EditorView} from "@codemirror/next/view";
import {EditorState} from "@codemirror/next/state";
import {lineNumbers} from "@codemirror/next/gutter";
import {specialChars} from "@codemirror/next/special-chars";
import {history, redo, redoSelection, undo, undoSelection} from "@codemirror/next/history";
import {foldCode, unfoldCode, foldGutter} from "@codemirror/next/fold";
import {javascript} from "@codemirror/next/lang-javascript";
import {defaultHighlighter} from "@codemirror/next/highlight";
import {baseKeymap, indentSelection} from "@codemirror/next/commands";
import {bracketMatching} from "@codemirror/next/matchbrackets";
import {closeBrackets} from "@codemirror/next/closebrackets";
import {keymap} from "@codemirror/next/keymap";
import {autocomplete} from "@codemirror/next/autocomplete";

import {esLint} from "@codemirror/next/lang-javascript";
import Linter from "eslint4b-prebuilt";
import {linter, openLintPanel} from "@codemirror/next/lint";

import LTNChunk from "./LTNChunk.js";

const IS_MAC = /Mac/.test(navigator.platform);
const ITEMS = [
	"function", "let", "const", "var",
	"console", "document", "body",
	// todo use already typed keys
];

export default class LTNChunkExecJS extends LTNChunk {
	constructor() {
		super();
		/** @type {EditorView} */
		this.view = null;
		
		/** @type {string} */
		this.code = '';
	}
	
	async init(data) {
		this.code = data.code;
	}
	
	static get title() {
		return "JavaScript executor";
	}
	
	async renderEditor() {
		this.view = new EditorView({
			state: EditorState.create({
				doc: this.code,
				extensions: [
					lineNumbers(),
					specialChars(),
					history(),
					foldGutter(),
					javascript(),
					linter(esLint(new Linter())),
					defaultHighlighter,
					bracketMatching(),
					closeBrackets,
					autocomplete({
						completeAt(state, pos) {
							return new Promise(resolve => {
								const line = state.doc.lineAt(pos);
								const before = state.doc.slice(line.start, pos);
								const after = state.doc.slice(pos, line.end);
								
								// do not auto-complete in the middle of words
								if (after.length > 0 && after[0].match(/\w/)) return resolve({items: []});
								
								// get prefix
								const matches = before.match(/\W(\w+)$/);
								if (!matches) return resolve({items: []});
								const prefix = matches[1];
								const start = pos - prefix.length;
								
								let items = ITEMS
									.filter(s => s.startsWith(prefix) && s !== prefix)
									.map(s => ({label: s, insertText: s}));
								
								setTimeout(() => resolve({start: start, items: items}), 100);
								
							});
						}
					}),
					keymap({
						"Mod-z": undo,
						"Mod-Shift-z": redo,
						"Mod-u": view => undoSelection(view) || true,
						[IS_MAC ? "Mod-Shift-u" : "Alt-u"]: redoSelection,
						"Ctrl-y": IS_MAC ? undefined : redo,
						"Shift-Tab": indentSelection,
						"Mod-Alt-[": foldCode,
						"Mod-Alt-]": unfoldCode,
						"Shift-Mod-m": openLintPanel
					}),
					keymap(baseKeymap)
				]
			})
		});
		
		return this.view.dom;
	}
	
	async renderReport() {
		
		// заданный код исполняется
		(new Function(this.code))();
		
		// чанк не отображается
		return null;
	}
	
	async save() {
		return {code: this.view.state.toJSON().doc};
	}
}
