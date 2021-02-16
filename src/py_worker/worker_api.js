export function worker_api(url) {
	return {
		worker: new Worker(url),
		listeners: [],
		
		run: function (script, context, onSuccess, onError) {
			this.worker.onerror = onError;
			this.worker.onmessage = (e) => {
				const {results, error} = e.data;
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
			this.worker.postMessage({...context, python: script});
		},
		asyncRun: function (script, context) {
			return new Promise((onSuccess, onError) => this.run(script, context, onSuccess, onError));
		},
		addEventListener(type, listener) {
			this.listeners.push({type, listener});
		},
		terminate() {
			this.worker.terminate();
		}
	}
}
