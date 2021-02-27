// Setup your project to serve `pyWorker.js`. You should also serve
// `pyodide.js`, and all its associated `.asm.js`, `.data`, `.json`,
// and `.wasm` files as well:
self.languagePluginUrl = 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/';
importScripts('https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js');

let pythonLoading;

async function loadPythonPackages() {
	await languagePluginLoader;
	pythonLoading = self.pyodide.loadPackage(['numpy', 'pytz']);
}

// todo разделить события сообщения и чистить воркер чтобы
//  не создавать по воркеру на каждый запуск
self.onmessage = async (event) => {
	// дождаться загрузки питона и библиотек
	await languagePluginLoader;
	await pythonLoading;
	
	
	const {python, context} = event.data;
	
	// инициализировать переменные в питоне
	for (const key of Object.keys(context.variables))
		self.pyodide.globals[key] = context.variables[key];
	
	// инициализировать функции в питоне
	for (let i = 0; i < context.events.length; i++) {
		let key = context.events[i];
		self.pyodide.globals[key] = (...message) => self.postMessage({type: key, message: JSON.parse(JSON.stringify([...message]))});
	}
	
	try {
		self.postMessage({type: "end", results: await self.pyodide.runPythonAsync(python)});
	} catch (error) {
		self.postMessage({error: error.message});
	}
};
