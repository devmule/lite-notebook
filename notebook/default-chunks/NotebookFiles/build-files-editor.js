import {downloadFile, fetchCSS, loadFiles} from "../../../utils/files.js";

const EVT_DELETE = "EVT_DELETE";
const EVT_DOWNLOAD = "EVT_DOWNLOAD";

let inited = false;

/** @param {File[]} file_list
 * @return {HTMLElement} */
export default async function (file_list) {
	
	if (!inited) {
		inited = true;
		await fetchCSS("./default-chunks/NotebookFiles/styles/main.css");
		await import("../../../libs/fontawesome.js");
	}
	
	
	let el = document.createElement('div');
	el.classList.add('notebook-files-file-list');
	
	let deleteFile = (file) => {
		let index = file_list.indexOf(file);
		if (index < 0) return;
		file_list.splice(index, 1);
		updateFileList();
	};
	
	let updateFileList = () => {
		el.innerHTML = "";
		for (let i = 0; i < file_list.length; i++) {
			let file = file_list[i];
			let file_element = createFileLine(file);
			file_element.addEventListener(EVT_DELETE, () => deleteFile(file));
			file_element.addEventListener(EVT_DOWNLOAD, () => downloadFile(file));
			el.appendChild(file_element);
		}
		let add_line = createAddFileLine();
		add_line.addEventListener("click", uploadFiles);
		el.appendChild(add_line);
	};
	
	let uploadFiles = async () => {
		let files = await loadFiles(true);
		if (!files) return;
		for (let i = 0; i < files.length; i++) {
			let file = files[i];
			file_list.push(file);
		}
		updateFileList();
	};
	
	updateFileList();
	
	
	return el;
}


/** @param {File} file
 * @return {HTMLElement} */
function createFileLine(file) {
	let line = document.createElement('div');
	line.classList.add("notebook-files-button", "notebook-files-line");
	
	let filename = document.createElement('div');
	filename.innerText = file.name;
	filename.classList.add("notebook-files-line-filename");
	line.appendChild(filename);
	
	let button_list = document.createElement('div');
	button_list.classList.add("notebook-files-line-button-list");
	line.appendChild(button_list);
	
	let button_download = document.createElement('div');
	button_list.appendChild(button_download);
	button_download.classList.add('notebook-files-button');
	button_download.i = document.createElement('i');
	button_download.i.classList.add('notebook-files-glyphicon', 'fas', 'fa-file-download');
	button_download.appendChild(button_download.i);
	button_download.addEventListener("click", () => line.dispatchEvent(new Event(EVT_DOWNLOAD)));
	
	let button_delete = document.createElement('div');
	button_delete.classList.add('notebook-files-button');
	button_list.appendChild(button_delete);
	button_delete.classList.add('notebook-files-button');
	button_delete.i = document.createElement('i');
	button_delete.i.classList.add('notebook-files-glyphicon', 'fas', 'fa-trash');
	button_delete.appendChild(button_delete.i);
	button_delete.addEventListener("click", () => line.dispatchEvent(new Event(EVT_DELETE)));
	
	return line;
}


/** @return {HTMLElement} */
function createAddFileLine() {
	let line = document.createElement('div');
	line.classList.add("notebook-files-button", "notebook-files-button-add-new");
	let i = document.createElement('i');
	i.classList.add('notebook-files-glyphicon', 'fas', 'fa-plus');
	line.appendChild(i);
	return line;
}
