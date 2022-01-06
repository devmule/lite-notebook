/**
 * @param {boolean} [multiple=false]
 * @param {string[]|null} [extensions=null] - если равен {@link null}, то разрешены все file extensions
 * @return {Promise.<FileList | null>}
 * */
export function loadFiles(multiple = false, extensions = null) {
	
	return new Promise((resolve) => {
		
		let exts = '*';
		if (extensions != null) {
			exts = '';
			for (let i = 0; i < extensions.length; i++) {
				let ext = extensions[i];
				exts += ext + ',';
			}
		}
		
		const input = document.createElement('input');
		input.accept = exts;
		input.type = 'file';
		input.multiple = multiple;
		
		input.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
		input.onchange = () => resolve(input.files);
		
	});
	
}

/** @param {File} file */
export function downloadFile(file) {
	
	const data = window.URL.createObjectURL(file);
	
	const link = document.createElement('a');
	
	link.href = data;
	link.download = file.name;
	
	link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
	setTimeout(() => window.URL.revokeObjectURL(data), 100);
}

/**
 * @param {string} [url]
 * @return {Promise.<any>}
 * */
export function loadJson(url) {
	
	return new Promise((resolve, reject) => {
		
		let req = new XMLHttpRequest();
		req.crossOrigin = 'anonymous';
		req.responseType = 'text';
		req.overrideMimeType('text/plain');
		req.onload = event => {
			if (req.status === 200 || req.status === 0) {
				resolve(JSON.parse(req.responseText));
			} else {
				reject(`cannot load file, status \"${req.status}\" given`);
			}
		};
		req.onerror = event => {
			reject(`cannot load file ${url}`);
		}
		req.open('GET', url, true);
		req.send(null);
		
	});
	
}


export function loadPlugins(names) {
	
	return new Promise(async (resolve) => {
		
		for (let i = 0; i < names.length; i++) {
			await import(`../plugins/${names[i]}/index.js`);
		}
		
		resolve();
		
	});
	
}


export async function fetchCSS(href) {
	return new Promise(((resolve, reject) => {
		let style = document.createElement('link');
		style.rel = "stylesheet";
		style.href = href;
		style.onload = resolve;
		style.onerror = reject;
		style.onabort = reject;
		let head = document.head || document.getElementsByTagName('head')[0];
		head.appendChild(style);
	}));
}
