const blob_code = new Blob([`
importScripts('https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js');
self.languagePluginUrl = 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/';
self.onmessage = async (event) => {
\tawait languagePluginLoader;
\tconst {python, context} = event.data;
\tfor (const key of Object.keys(context.variables)) {self.pyodide.globals[key] = context.variables[key];}
\tfor (let i = 0; i < context.events.length; i++) {let key = context.events[i];
\t\tself.pyodide.globals[key] = (...message) => {self.postMessage({type: key, message: JSON.parse(JSON.stringify([...message]))});}
\t}try {self.postMessage({type: "end", results: await self.pyodide.runPythonAsync(python)});
\t} catch (error) {self.postMessage({error: error.message});}
};`], {type: 'text/plain'});

function createWorker() {
	return new Worker(URL.createObjectURL(blob_code));
}

function worker_api() {
	return {
		worker: new Worker(URL.createObjectURL(blob_code)),
		listeners: [],
		
		context: {
			variables: {},
			events: ['print']
		},
		
		addVariable (name, value) {
			this.context.variables[name] = value
		},
		addFunction (name) {
			this.context.events.push(name)
		},
		addEventListener (type, listener) {
			this.listeners.push({type, listener});
		},
		
		run (script, onSuccess, onError) {
			this.worker.onerror = onError;
			this.worker.onmessage = e => {
				const {error} = e.data;
				for (let i = 0; i < this.listeners.length; i++) {
					if (e.data.type === this.listeners[i].type)
						try {
							this.listeners[i].listener(e.data);
						} catch (err) {
							console.error(err.message)
						}
				}
				if (e.data.type === "end") onSuccess(e.data);
				if (error) onError(error);
			};
			
			this.worker.postMessage({context: this.context, python: script});
		},
		terminate() {
			this.worker.terminate();
		}
	}
}


class PythonExecutor {
	constructor() {
		this.view = null;
	}
	
	static get title() {
		return "Python";
	}
	
	async init(data) {
	}
	
	async renderEditor() {
	}
	
	async renderReport() {
	}
	
	async save() {
	}
}


LTN.chunks.PythonExecutor = PythonExecutor;
