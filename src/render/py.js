//
// todo сделать воркером
async function parse(ch, element) {
	await languagePluginLoader;
	if (ch.flags.indexOf("async") >= 0) {
		await pyodide.runPythonAsync(ch.content);
	} else {
		pyodide.runPython(ch.content);
	}
}

const py_parser = {
	types: ['py', 'python'],
	parse: parse,
};

export default py_parser;
