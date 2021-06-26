import Chunk from "./Chunk";

export default class ChunkMeta extends Chunk {
	constructor() {
		super();
		
		this.author = '';
		this.files = [];
	}
	
	fileToRaw(file) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();
			reader.onload = () => resolve({
				data: reader.result, name: file.name,
				options: {type: file.type, lastModified: file.lastModified}
			});
			reader.onerror = reject;
			reader.readAsBinaryString(file);
		});
	}
	
	rawToFile(raw) {
		let array = new Uint8Array(raw.data.length);
		for (let i = 0; i < raw.data.length; i++) array[i] = raw.data.charCodeAt(i);
		return new File([array], raw.name, raw.options);
	}
	
	async raw() {
		let data = await super.raw();
		data.author = this.author;
		
		data.files = [];
		for (let i = 0; i < this.files.length; i++)
			data.files.push(await this.fileToRaw(this.files[i]));
		
		return data;
	}
	
	async init(data) {
		await super.init(data);
		this.author = data.author;
		
		this.files = [];
		for (let i = 0; i < data.files.length; i++)
			this.files.push(await this.rawToFile(data.files[i]));
	}
	
	async render(notebook) {
	}
	
	addFiles(files) {
	}
}