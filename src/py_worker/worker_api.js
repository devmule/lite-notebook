export function worker_api(url) {
	return {
		worker: new Worker(url),
		listeners: [],
		
		context: {
			variables: {
				lite_notebook: lite_notebook.v,
			},
			events: ['print']
		},
		
		addVariable: function (name, value) {
			this.context.variables[name] = value
		},
		addFunction: function (name) {
			this.context.events.push(name)
		},
		addEventListener: function (type, listener) {
			this.listeners.push({type, listener});
		},
		
		run: function (script, onSuccess, onError) {
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
		asyncRun: function (script, context) {
			return new Promise((onSuccess, onError) => this.run(script, context, onSuccess, onError));
		},
		terminate() {
			this.worker.terminate();
		}
	}
}
