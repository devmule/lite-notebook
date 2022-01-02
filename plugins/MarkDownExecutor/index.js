import buildEditor from "./build-markdown-editor.js";
import renderMarkdown from "./render-markdown.js";

export default class MarkDownExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.md = '';
	}
	
	static get title() {
		return "Markdown executor";
	}
	
	async init(data) {
		this.md = data.md;
	}
	
	async save() {
		return {md: this.view.session.getValue()};
	}
	
	async renderEditor() {
		this.view = await buildEditor();
		this.view.session.setValue(this.md);
		return this.view.container;
	}
	
	async renderReport() {
		this.view = await renderMarkdown(this.md);
		return this.view;
	}
}

LTN.chunks["MarkDownExecutor"] = MarkDownExecutor;
