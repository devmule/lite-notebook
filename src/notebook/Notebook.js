import chunks from "./chunks/Chunk.js";

export class Notebook {
	constructor() {
		this.chunks /*[Chunk]*/ = [];
		this.screen = null;
	}
	
	async render() {
		for (let i = 0; i < this.chunks.length; i++) {
			let /*Chunk*/ ch = this.chunks[i];
			await ch.render(this);
		}
	}
	
	async raw() {
		let data = {};
		data.chunks = [];
		for (let i = 0; i < this.chunks.length; i++) {
			let /*Chunk*/ ch = this.chunks[i];
			data.chunks.push(await ch.raw());
		}
		return data;
	}
	
	async init(data) {
		this.chunks = [];
		for (let i = 0; i < data.chunks.length; i++) {
			let rawChunk = data.chunks[i];
			let c = chunks[rawChunk.type];
			if (c) {
				let ch = new c();
				await ch.init(rawChunk);
				this.chunks.push(ch);
			} else {
				throw new TypeError(`Unknown type \"${rawChunk.type}\"`)
			}
		}
	}
}
