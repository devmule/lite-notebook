import screenHtml from "./screen.html";

export class Screen {
	constructor() {
		
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
		this.editor.src = './frame.html?isEditor=1';
		
		/** @type {HTMLIFrameElement} */
		this.report = this.element.querySelector('#screen-report-frame');
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
	 * @param {Promise.<any>} aNotebookData
	 * */
	async renderNotebookOnScreen(notebookScreen, aNotebookData) {
		await new Promise(resolve => {
			notebookScreen.contentWindow.location.reload();
			notebookScreen.onload = resolve;
		});
	}
	
	showEditorScreen() {
		this._screensContainer.classList.remove('report');
	}
	
	showReportScreen() {
		this._screensContainer.classList.add('report');
	}
}
