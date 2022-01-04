import buildFilesEditor from "./build-files-editor.js";

/**
 * @typedef {Object} FileData - Данные файла в бинарном формате.
 * @property {string} data
 * @property {string} name
 * @property {string} type
 * @property {number} lastModified
 * */
import {applyFileChunk, deleteFileChunk} from "./files.js";


function ab2str(buf) {
	return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
	let buf = new ArrayBuffer(str.length * 2);
	let bufView = new Uint16Array(buf);
	for (let i = 0, strLen = str.length; i < strLen; i++) bufView[i] = str.charCodeAt(i);
	return buf;
}


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
			
			/** @type {ArrayBuffer} */
			const arrayBuffer = str2ab(aFileData.data);
			
			/** @type {File} */
			const file = new File([arrayBuffer], aFileData.name, {
				type: aFileData.type,
				lastModified: aFileData.lastModified
			});
			
			this.files.push(file);
		}
	}
	
	async save() {
		let files = [];
		
		for (let i = 0; i < this.files.length; i++) {
			const file = this.files[i];
			
			/** @type {ArrayBuffer} */
			const arrayBuffer = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.readAsArrayBuffer(file);
			});
			
			/** @type {FileData} */
			const fileData = {
				data: ab2str(arrayBuffer),
				name: file.name,
				type: file.type,
				lastModified: file.lastModified,
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
