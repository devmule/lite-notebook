//
//
/** @type {Set.<NotebookFiles>} */
const chunks = new Set();

export const applyFileChunk = (chunk) => chunks.add(chunk);
export const deleteFileChunk = (chunk) => chunks.delete(chunk);

export const files = {
	
	/** @param {string} name
	 * @return {Promise.<File>} */
	async getFile(name) {
		
		name = name.split("?")[0];
		
		let chunks_array = Array.from(chunks);
		
		for (let i = 0; i < chunks_array.length; i++) {
			
			let ch = chunks_array[0];
			
			for (let i = 0; i < ch.files.length; i++) {
				/** @type {File} */
				let file = ch.files[i];
				if (file.name === name) return file;
			}
			
		}
		
		throw new Error(`no such file \"${name}\"`);
	},
	
	/** @param {string} name
	 * @return {Promise.<string>} */
	async getFileAsText(name) {
		let file = await this.getFile(name);
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(reader.error);
		});
	},
	
	/** @param {string} name
	 * @return {Promise.<string>} */
	async getFileAsDataURL(name) {
		let file = await this.getFile(name);
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(reader.error);
		});
	},
};
