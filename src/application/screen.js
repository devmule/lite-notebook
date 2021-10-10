import screenHtml from "./screen.html";
import AppMessenger from "./messenger";
import EnumsMsg from '../utils/EnumsMsg';

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
		this._buttonSidebarToggle.addEventListener('click', () => {
			let outer = this.element.children[0]
			let sidebar_on_class = 'sidebar-on';
			let wasOpened = outer.classList.contains(sidebar_on_class);
			if (wasOpened) outer.classList.remove(sidebar_on_class);
			else outer.classList.add(sidebar_on_class);
		});
		
		/** @type {HTMLIFrameElement} */
		this.editor = this.element.querySelector('#screen-editor-frame');
		this.editor.src = './frame.html?isEditor=1&senderName=editor';
		this.addSender('editor', this.editor);
		
		/** @type {HTMLIFrameElement} */
		this.report = this.element.querySelector('#screen-report-frame');
		this.report.src = './frame.html?isEditor=0&senderName=report';
		this.addSender('report', this.report);
		
		
		let go_render = this.element.querySelector('#go-render');
		go_render.addEventListener('click', async () => {
			await this.reloadReport();
		});
		
		let log_data = this.element.querySelector('#log-notebook-data');
		log_data.addEventListener('click', async () => {
			let aNotebookData = await this.getNotebookFromScreen('editor');
			console.log(aNotebookData)
		});
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
