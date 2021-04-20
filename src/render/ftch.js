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

async function loadText(request) {
	let index = request.indexOf("=");
	if (index < 0) return;
	
	let var_name = request.slice(0, index).trim(),
		src = request.slice(index + 1, request.length).trim();
	
	if (!src.startsWith('http')) src = lite_notebook.root + "/" + src;
	
	if (var_name && src) {
		let md = await fetch(src);
		self[var_name] = await md.text();
	}
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
			case "text":
				await loadText(src);
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
