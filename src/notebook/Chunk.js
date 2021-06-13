class Chunk {
	constructor() {
		this.name = '';
		this.content = '';
	}
	
	raw() {
		let data = {};
		
		data.type = this.constructor.name;
		data.name = this.name;
		data.content = this.content;
		
		return data;
	}
	
	init(data) {
		this.name = data.name;
		this.content = data.content;
	}
	
	async render(notebook) {
	}
}

class ChunkCSS extends Chunk {
	async render(notebook) {
		// todo fix
		let styleTag = document.createElement('style');
		styleTag.appendChild(document.createTextNode(this.content));
		notebook.screen.appendChild(styleTag);
	}
}

class ChunkLib extends Chunk {
	constructor() {
		super();
	}
	
	async loadLib(url) {
		return new Promise((resolve, reject) => {
			let scriptTag = document.createElement('script');
			document.head.appendChild(scriptTag);
			
			scriptTag.src = url;
			scriptTag.async = false;
			scriptTag.onload = resolve;
			scriptTag.onerror = reject;
		});
	}
	
	async render(notebook) {
		let lines = this.content.split("\n");
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i].trim();
			if (line) {
				
				let index = line.indexOf(":");
				if (index < 0) continue;
				
				let type = line.slice(0, index).trim(),
					src = line.slice(index + 1, line.length).trim();
				
				if (type && src) await this.loadLib(src);
			}
		}
	}
}

class ChunkJavaScript extends Chunk {
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

class ChunkMarkDown extends Chunk {
	
	constructor() {
		super();
		if (!ChunkMarkDown.init) {
			ChunkMarkDown.init = true;
			ChunkMarkDown.TAG_NAME = "user-markdown";
			ChunkMarkDown.renderer = null;
		}
	}
	
	async render(notebook) {
		
		if (!ChunkMarkDown.renderer) { // init renderer
			ChunkMarkDown.renderer = new marked.Renderer();
			
			const originalRendererLink = ChunkMarkDown.renderer.link.bind(ChunkMarkDown.renderer);
			const originalRendererImage = ChunkMarkDown.renderer.image.bind(ChunkMarkDown.renderer);
			
			// todo local files from notebook files
			
			ChunkMarkDown.renderer.link = (href, title, text) => {
				if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
				let link = originalRendererLink(href, title, text);
				link = link.replace("<a", "<a target='_blank'");
				return link;
			};
			
			ChunkMarkDown.renderer.image = (href, title, text) => {
				if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
				return originalRendererImage(href, title, text);
			};
		}
		
		let el = document.createElement("div");
		el.innerHTML = marked(this.content, {renderer: ChunkMarkDown.renderer});
		if (el.classList) el.classList.add(ChunkMarkDown.TAG_NAME);
		
		notebook.screen.appendChild(el);
	}
}

class ChunkMeta extends Chunk {
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

const chunks = {Chunk, ChunkCSS, ChunkLib, ChunkJavaScript, ChunkMarkDown, ChunkMeta};

export default chunks;
