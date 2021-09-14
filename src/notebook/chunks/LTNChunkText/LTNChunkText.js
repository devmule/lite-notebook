import "./editor.css";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {schema} from "prosemirror-schema-basic"
import {exampleSetup} from "prosemirror-example-setup"


import LTNChunk from "../LTNChunk";

export default class LTNChunkText extends LTNChunk {
	
	constructor() {
		super();
		/** @type {EditorView} */
		this.view = null;
	}
	
	static get title() {
		return "Text";
	}
	
	async renderEditor() {
		let div = document.createElement('div');
		
		let state = EditorState.create({
			schema: schema, doc: '',
			plugins: exampleSetup({schema: schema}) // подключить редактор
		});
		this.view = new EditorView(div, {state: state, contentEditable: true});
		
		return div;
	}
	
	async renderReport() {
		let div = document.createElement('div');
		
		let state = EditorState.create({schema: schema, doc: ''});
		this.view = new EditorView(div, {state: state, contentEditable: false});
		
		return div;
	}
	
	async init(data) {
		this.view.state.fromJSON(data.state);
	}
	
	async save() {
		return {state: this.view.state.toJSON()};
	}
}
