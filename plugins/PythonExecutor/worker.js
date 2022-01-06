importScripts('https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js');

self.languagePluginUrl = 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/';

self.onmessage = async (event) => {
	// дождаться загрузки питона и библиотек
	await languagePluginLoader;
	
	const {python, context} = event.data;
	
	// инициализировать переменные в питоне
	for (const key of Object.keys(context.variables))
		self.pyodide.globals[key] = context.variables[key];
	
	// инициализировать функции в питоне
	for (let i = 0; i < context.events.length; i++) {
		let key = context.events[i];
		self.pyodide.globals[key] = (...message) =>
			self.postMessage({type: key, message: JSON.parse(JSON.stringify([...message]))});
	}
	
	try {
		self.postMessage({type: "end", results: await self.pyodide.runPythonAsync(python)});
	} catch (error) {
		self.postMessage({error: error.message});
	}
};
