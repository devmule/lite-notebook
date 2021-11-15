import "./codemirror.css";
import {EditorView} from "@codemirror/next/view";
import {EditorState} from "@codemirror/next/state";
import {lineNumbers} from "@codemirror/next/gutter";
import {specialChars} from "@codemirror/next/special-chars";
import {history, redo, redoSelection, undo, undoSelection} from "@codemirror/next/history";
import {foldCode, foldGutter, unfoldCode} from "@codemirror/next/fold";
import {css, cssSyntax} from "@codemirror/next/lang-css";
import {defaultHighlighter} from "@codemirror/next/highlight";
import {keymap} from "@codemirror/next/keymap";
import {baseKeymap, indentSelection} from "@codemirror/next/commands";

const IS_MAC = /Mac/.test(navigator.platform);

export default class LTNChunkCSS {
	constructor() {
		
		/** @type {EditorView} */
		this.view = null;
		
		/** @type {string} */
		this.text = '';
	}
	
	static get title() {
		return "CSS";
	}
	
	async init(data) {
		this.text = data.text;
	}
	
	async renderEditor() {
		this.view = new EditorView({
			state: EditorState.create({
				doc: this.text,
				extensions: [
					lineNumbers(), specialChars(),
					history(), foldGutter(), css(),
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
		
		let head = document.head || document.getElementsByTagName('head')[0];
		let style = document.createElement('style');
		
		head.appendChild(style);
		
		style.type = 'text/css';
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = this.text;
		} else {
			style.appendChild(document.createTextNode(this.text));
		}
		
	}
	
	async save() {
		return {text: this.view.state.toJSON().doc};
	}
}
