import "./prosemirror.css";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {schema} from "prosemirror-schema-basic"
import {exampleSetup} from "prosemirror-example-setup"

export default class LTNChunkText {
	
	constructor() {
		
		/** @type {EditorView} */
		this.view = null;
		
		/** @type {any} */
		this.doc = '';
	}
	
	static get title() {
		return "Text";
	}
	
	async renderEditor() {
		let div = document.createElement('div');
		
		let doc = this.doc instanceof Object ? schema.nodeFromJSON(this.doc) : '';
		
		let state = EditorState.create({
			schema: schema, doc: doc,
			plugins: exampleSetup({schema: schema}) // подключить редактор
		});
		this.view = new EditorView(div, {state: state, contentEditable: true});
		
		return div;
	}
	
	async renderReport() {
		let div = document.createElement('div');
		
		let doc = this.doc instanceof Object ? schema.nodeFromJSON(this.doc) : '';
		
		let state = EditorState.create({schema: schema, doc: doc});
		this.view = new EditorView(div, {state: state, contentEditable: false});
		
		return div;
	}
	
	async init(data) {
		this.doc = data.doc;
	}
	
	async save() {
		return {doc: this.view.state.toJSON().doc};
	}
}

LTN.chunks.LTNChunkText = LTNChunkText;
