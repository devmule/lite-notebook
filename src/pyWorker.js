export function pyWorker() {
	return {
		worker: new Worker('worker.js'),
		run: function (script, context, onSuccess, onError) {
			this.worker.onerror = onError;
			this.worker.onmessage = (e) => onSuccess(e.data);
			this.worker.postMessage({...context, python: script});
		},
		asyncRun: function (script, context) {
			return new Promise((onSuccess, onError) => this.run(script, context, onSuccess, onError));
		}
	}
}
