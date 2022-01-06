import buildFilesEditor from "./build-files-editor.js";
import {applyFileChunk, deleteFileChunk} from "./files.js";


/**
 * @typedef {Object} FileData - Данные файла в бинарном формате.
 * @property {string} dataUri
 * @property {string} name
 * @property {string} type
 * @property {number} lastModified
 * */


/**
 * @class {NotebookFiles}
 * @implements {LTNChunk}
 * */
export class NotebookFiles {
	constructor() {
		
		this.view = null;
		this.files = [];
		
		applyFileChunk(this);
		
	}
	
	static get title() {
		return "Files";
	}
	
	async delete() {
		deleteFileChunk(this);
	}
	
	async init(data) {
		
		for (let i = 0; i < data.files.length; i++) {
			
			/** @type {FileData} */
			const aFileData = data.files[i];
			
			let byteString = atob(aFileData.dataUri.split(',')[1]);
			let arrayBuffer = new ArrayBuffer(byteString.length);
			let view = new Uint8Array(arrayBuffer);
			for (let i = 0; i < byteString.length; i++) view[i] = byteString.charCodeAt(i);
			
			const file = new File([arrayBuffer], aFileData.name, {
				lastModified: aFileData.lastModified,
				type: aFileData.type,
			});
			
			this.files.push(file);
		}
	}
	
	async save() {
		
		let files = [];
		
		for (let i = 0; i < this.files.length; i++) {
			const file = this.files[i];
			
			/** @type {FileData} */
			const fileData = {
				dataUri: await new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = () => resolve(reader.result);
					reader.onerror = () => reject(reader.error);
				}),
				name: file.name,
				type: file.type,
				lastModified: file.lastModified
			};
			
			files.push(fileData);
			
		}
		
		return {files};
	}
	
	async renderEditor() {
		this.view = await buildFilesEditor(this.files);
		return this.view;
	}
	
	async renderReport() {
		return null;
	}
}
