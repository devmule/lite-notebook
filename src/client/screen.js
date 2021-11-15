import screenHtml from "./screen.html";
import AppMessenger from "./messenger";
import EnumsMsg from '../utils/EnumsMsg';
import localizations from "../localizations.json";
import {loadFiles} from "../utils/files";


const FILE_EXT = ".ltn";


export class AppScreen extends AppMessenger {
	constructor() {
		super();
		
		/** @type {HTMLDivElement} */
		this.element = document.createElement('div');
		this.element.innerHTML = screenHtml;
		
		/** @private
		 * @type {HTMLDivElement} */
		this._screensContainer = this.element.querySelector('.screen');
		
		/** @private
		 * @type {HTMLDivElement} */
		this._buttonSidebarToggle = this.element.querySelector('#btn-sidebar-toggle');
		this._buttonSidebarToggle.addEventListener('click', this.sidebarToggle.bind(this));
		
		/** @type {HTMLIFrameElement} */
		this.editor = this.element.querySelector('#screen-editor-frame');
		this.editor.src = './client/frame.html?isEditor=1&senderName=editor';
		this.addSender('editor', this.editor);
		
		/** @type {HTMLIFrameElement} */
		this.report = this.element.querySelector('#screen-report-frame');
		this.report.src = './client/frame.html?isEditor=0&senderName=report';
		this.addSender('report', this.report);
		
		
		let go_editor = this.element.querySelector('#go-editor');
		go_editor.innerHTML = "<i class=\"fas fa-edit\"></i> " + localizations.button_screen_go_editor;
		go_editor.addEventListener('click', this.showEditorScreen.bind(this));
		
		let go_report = this.element.querySelector('#go-report');
		go_report.innerHTML = "<i class=\"fas fa-poll\"></i> " + localizations.button_screen_go_report;
		go_report.addEventListener('click', this.showReportScreen.bind(this));
		
		let do_render = this.element.querySelector('#do-render');
		do_render.innerHTML = "<i class=\"fas fa-magic\"></i> " + localizations.button_screen_do_render;
		do_render.addEventListener('click', this.reloadReport.bind(this));
		
		let load_notebook = this.element.querySelector('#load-notebook');
		load_notebook.innerHTML = "<i class=\"fas fa-upload\"></i> " + localizations.button_screen_load_notebook;
		load_notebook.addEventListener('click', this.loadNotebook.bind(this));
		
		let save_notebook = this.element.querySelector('#save-notebook');
		save_notebook.innerHTML = "<i class=\"fas fa-download\"></i> " + localizations.button_screen_save_notebook;
		save_notebook.addEventListener('click', this.saveNotebook.bind(this));
	}
	
	async sidebarToggle() {
		let outer = this.element.children[0]
		let sidebar_on_class = 'sidebar-on';
		let wasOpened = outer.classList.contains(sidebar_on_class);
		if (wasOpened) outer.classList.remove(sidebar_on_class);
		else outer.classList.add(sidebar_on_class);
	}
	
	async loadNotebook() {
		
		let files = await loadFiles(false, [FILE_EXT]);
		let file = files[0];
		if (!file) return;
		
		let fileReader = new FileReader();
		fileReader.onload = async (e) => {
			let /**@type {string} */ res = fileReader.result
			let /**@type {NotebookData}  */ aNotebookData = JSON.parse(res);
			await this.initNotebookOnScreen('editor', aNotebookData);
		};
		
		fileReader.readAsText(file);
		
	}
	
	async saveNotebook() {
		
		/** @type {NotebookData}  */
		const aNotebookData = await this.getNotebookFromScreen('editor');
		
		const filename = aNotebookData.name + FILE_EXT;
		const data = JSON.stringify(aNotebookData);  // todo zlib
		
		const blob = new Blob([data], {type: 'octet/stream'});
		
		const elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		elem.click();
		
	}
	
	async reloadReport() {
		let aNotebookData = await this.getNotebookFromScreen('editor');
		await this.initNotebookOnScreen('report', aNotebookData);
	}
	
	/**
	 * @param {string} name
	 * @return {Promise.<NotebookData>}
	 * */
	async getNotebookFromScreen(name) {
		return /** @type {NotebookData} */ await this.request(name, EnumsMsg.GET_NOTEBOOK);
	}
	
	/**
	 * @param {string} name
	 * @param {NotebookData} aNotebookData
	 * @return {Promise.<any>}
	 * */
	async initNotebookOnScreen(name, aNotebookData) {
		
		if (!this.senders.has(name)) throw new Error(`Name \"${name}\" not exist!`);
		let notebookScreen = this.senders.get(name);
		
		await new Promise(resolve => {
			notebookScreen.contentWindow.location.reload();
			notebookScreen.onload = resolve;
		});
		
		await this.request(name, EnumsMsg.INIT_NOTEBOOK, aNotebookData);
	}
	
	showEditorScreen() {
		this._screensContainer.classList.remove('report');
	}
	
	showReportScreen() {
		this._screensContainer.classList.add('report');
	}
}
