import {EditorView} from "@codemirror/next/view";
import {EditorState} from "@codemirror/next/state";
import {html, htmlSyntax} from "@codemirror/next/lang-html";
import {lineNumbers} from "@codemirror/next/gutter";
import {specialChars} from "@codemirror/next/special-chars";
import {history, redo, redoSelection, undo, undoSelection} from "@codemirror/next/history";
import {foldCode, foldGutter, unfoldCode} from "@codemirror/next/fold";
import {defaultHighlighter} from "@codemirror/next/highlight";
import {keymap} from "@codemirror/next/keymap";
import {baseKeymap, indentSelection} from "@codemirror/next/commands";

const IS_MAC = /Mac/.test(navigator.platform);

class LTNChunkHTML {
	
	constructor() {
		
		/** @type {EditorView} */
		this.view = null;
		
		/** @type {string} */
		this.doc = '';
	}
	
	static get title() {
		return "HTML";
	}
	
	async init(data) {
		this.doc = data.doc;
	}
	
	async renderEditor() {
		this.view = new EditorView({
			state: EditorState.create({
				doc: this.doc,
				extensions: [
					lineNumbers(),
					specialChars(),
					history(),
					foldGutter(),
					html(),
					defaultHighlighter,
					keymap({
						"Mod-z": undo,
						"Mod-Shift-z": redo,
						"Mod-u": view => undoSelection(view) || true,
						[IS_MAC ? "Mod-Shift-u" : "Alt-u"]: redoSelection,
						"Ctrl-y": IS_MAC ? undefined : redo,
						"Shift-Tab": indentSelection,
						"Mod-Alt-[": foldCode,
						"Mod-Alt-]": unfoldCode,
					}),
					keymap(baseKeymap)
				]
			})
		});
		
		return this.view.dom;
	}
	
	async renderReport() {
		let div = document.createElement('div');
		div.innerHTML = this.doc;
		return div;
	}
	
	async save() {
		return {doc: this.view.state.toJSON().doc};
	}
}

LTN.chunks.LTNChunkHTML = LTNChunkHTML;
