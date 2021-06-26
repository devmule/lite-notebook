import Chunk from "./Chunk";

export default class ChunkJavaScript extends Chunk {
	constructor() {
		super();
		this.async = false;
	}
	
	async raw() {
		let data = await super.raw();
		data.async = this.async;
		
		return data;
	}
	
	async init(data) {
		await super.init(data);
		this.async = data.async;
	}
	
	async render(notebook) {
		if (this.async) await eval(this.content);
		else eval(this.content);
	}
}