import {editor, render} from "./build-latex-editor.js"

/**
 * @class {LaTeXExecutor}
 * @implements {LTNChunk}
 * */
export default class LaTeXExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.latex = '';
	}
	
	static get title() {
		return "LaTeX";
	}
	
	async delete() {
	}
	
	async init(data) {
		this.latex = data.latex;
	}
	
	async save() {
		return {latex: this.view.session.getValue()};
	}
	
	async renderEditor() {
		this.view = await editor();
		this.view.session.setValue(this.latex);
		return this.view.container;
	}
	
	async renderReport() {
		this.view = await render(this.latex);
		return this.view;
	}
}

LTN.chunks["LaTeXExecutor"] = LaTeXExecutor;
