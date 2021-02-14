async function loadJS(url) {
	
	return new Promise((resolve, reject) => {
		
		let scriptTag = document.createElement('script');
		document.head.appendChild(scriptTag);
		scriptTag.src = url;
		scriptTag.async = false;
		
		scriptTag.onload = resolve;
		scriptTag.onerror = reject;
	});
}

async function loadPY(packet) {
	await languagePluginLoader;
	return pyodide.loadPackage([packet])
}

async function parseLine(line) {
	let index = line.indexOf(":");
	if (index < 0) return;
	
	let type = line.slice(0, index).trim(),
		src = line.slice(index + 1, line.length).trim();
	
	if (type && src) {
		
		switch (type) {
			case "js":
				await loadJS(src);
				break;
			case "py":
				await loadPY(src);
				break;
		}
	}
}

async function parse(ch, element) {
	let lines = ch.content.split("\n");
	for (let i = 0; i < lines.length; i++) {
		
		let line = lines[i].trim();
		if (line) await parseLine(line);
	}
}

const fetch_parser = {
	types: ['fetch'],
	parse: parse,
};

export default fetch_parser;
