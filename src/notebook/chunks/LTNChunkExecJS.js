import LTNChunk from "./LTNChunk.js";

export default class LTNChunkExecJS extends LTNChunk {
	async init(data) {
	}
	
	static get title() {
		return "JavaScript executor";
	}
	
	async renderEditor() {
		return document.createElement('input')
	}
	
	async renderReport() {
	}
	
	async save() {
	}
}
