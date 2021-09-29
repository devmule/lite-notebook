import screenHtml from "./screen.html";

export class Screen {
	constructor() {
		
		/** @type {HTMLDivElement} */
		this.element = document.createElement('div');
		this.element.innerHTML = screenHtml;
		
		/** @type {HTMLIFrameElement} */
		this.editor = this.element.querySelector('#screen-editor');
		this.editor.src = './frame.html?isEditor=1';
		
		/** @type {HTMLIFrameElement} */
		this.report = this.element.querySelector('#screen-report');
		this.report.src = './frame.html?isEditor=0';
	}
	
	async reloadReport() {
		let aNotebookData = await this.getNotebookFromScreen(this.editor);
		await this.renderNotebookOnScreen(this.report, aNotebookData);
	}
	
	/**
	 * @param {HTMLIFrameElement} notebookScreen
	 * @return {Promise.<any>}
	 * */
	async getNotebookFromScreen(notebookScreen) {
	
	}
	
	/**
	 * @param {HTMLIFrameElement} notebookScreen
	 * @param {any} aNotebookData
	 * */
	async renderNotebookOnScreen(notebookScreen, aNotebookData) {
		await new Promise(resolve => {
			notebookScreen.contentWindow.location.reload();
			notebookScreen.onload = resolve;
		});
	}
}
