import LTNChunk from "./LTNChunk.js";

export default class LTNChunkText extends LTNChunk {
	
	async init(data) {
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
