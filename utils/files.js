/**
 * @param {boolean} [multiple=false]
 * @param {string[]|null} [extensions=null] - если равен {@link null}, то разрешены все file extensions
 * @return {Promise.<FileList | null>}
 * */
export function loadFiles(multiple = false, extensions = null) {
	
	return new Promise((resolve, reject) => {
		
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
		
		try {
			input.click();
			input.onchange = () => resolve(input.files);
		} catch (e) {
			reject();
		}
		
	});
	
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
