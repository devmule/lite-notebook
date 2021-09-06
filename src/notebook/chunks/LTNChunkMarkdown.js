import LTNChunk from "./LTNChunk.js";

export default class LTNChunkMarkdown extends LTNChunk {
	// todo use https://prosemirror.net/
	
	async init(data) {
	}
	
	static get title() {
		return "Markdown";
	}
	
	async renderEditor() {
		return document.createElement('input')
	}
	
	async renderReport() {
		return document.createElement('input')
	}
	
	async save() {
	}
}
