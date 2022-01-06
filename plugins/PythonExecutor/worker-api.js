export async function worker_api() {
	
	return {
		worker: new Worker("../plugins/PythonExecutor/worker.js"),
		listeners: [],
		
		context: {
			events: ['print'],
			variables: {},
		},
		
		addVariable(name, value) {
			this.context.variables[name] = value
		},
		addFunction(name) {
			this.context.events.push(name)
		},
		addEventListener(type, listener) {
			this.listeners.push({type, listener});
		},
		
		run(script, onSuccess, onError) {
			this.worker.onerror = (e) => onError(e.message)
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
