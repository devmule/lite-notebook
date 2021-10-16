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
