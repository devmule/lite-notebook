/**
 * @module elements
 * @description фабрики для создания HTML элементов
 * */


const CLASS_SCREEN = 'ltn-screen';

const CLASS_BLOCK = 'ltn-block';
const CLASS_BLOCK_CONTENT = 'ltn-block-content';
const CLASS_BLOCK_HEADER = 'ltn-block-header';
const CLASS_BLOCK_HEADER_HIDED = 'hided';

const CLASS_MINI_BTN = 'ltn-mini-btn';
const CLASS_OPTIONS_LIST = 'ltn-option-list';
const CLASS_NOSELECT = 'ltn-noselect';
const CLASS_TITLE = 'title';

const CLASS_IMG_BURGER = 'burger';
const CLASS_IMG_PLUS = 'plus';
const CLASS_IMG_HIDE = 'hide';


/**
 * @return {HTMLDivElement}
 * */
export function createEmptyBlock() {
	
	let elemBlock = document.createElement('div');
	elemBlock.classList.add(CLASS_BLOCK);
	return elemBlock;
	
}


/**
 * @param {HTMLElement} content
 * @param {boolean} isEditor
 * @param {string} title
 * @return {HTMLDivElement}
 * */
export function createContentBlock(content, isEditor, title) {
	
	let elemBlock = createEmptyBlock();
	
	// content itself
	let elemContent = document.createElement('div');
	elemContent.classList.add(CLASS_BLOCK_CONTENT);
	
	if (isEditor) {
		
		let elemBtnOptions = document.createElement('div');
		elemBtnOptions.classList.add(CLASS_MINI_BTN, CLASS_IMG_BURGER);
		elemBtnOptions.addEventListener('click', () => elemBlock.dispatchEvent(new Event('options')));
		
		let elemHeader = document.createElement('div');
		elemHeader.classList.add(CLASS_BLOCK_HEADER);
		
		let elemBtnHide = document.createElement('div');
		elemBtnHide.classList.add(CLASS_MINI_BTN, CLASS_IMG_HIDE);
		elemBtnHide.addEventListener('click', () => {
			
			if (elemBtnHide.classList.contains(CLASS_BLOCK_HEADER_HIDED)) {
				elemBtnHide.classList.remove(CLASS_BLOCK_HEADER_HIDED);
				elemContent.classList.remove(CLASS_BLOCK_HEADER_HIDED);
				
			} else {
				elemBtnHide.classList.add(CLASS_BLOCK_HEADER_HIDED);
				elemContent.classList.add(CLASS_BLOCK_HEADER_HIDED);
			}
		});
		
		const CHAR_LEN = 24;
		let elemTitle = document.createElement('textarea');
		elemTitle.rows = 1;
		elemTitle.cols = 24;
		elemTitle.charswidth = CHAR_LEN;
		elemTitle.value = title.substr(0, CHAR_LEN);
		let prevText = elemTitle.value;
		let onTitleChange = () => {
			let text = elemTitle.value.replace(/(\r\n|\n|\r)/gm, "");
			if (text.length > CHAR_LEN) {
				text = prevText;
			} else {
				prevText = text;
			}
			elemTitle.value = text;
			let e = new Event('title');
			e.title = elemTitle.value.trim();
			elemBlock.dispatchEvent(e);
		};
		
		elemTitle.addEventListener('change', onTitleChange);
		elemTitle.addEventListener('keyup', onTitleChange);
		elemTitle.addEventListener('keydown', onTitleChange);
		elemTitle.addEventListener('keypress', onTitleChange);
		elemTitle.addEventListener('paste', onTitleChange);
		
		
		elemBlock.appendChild(elemBtnOptions);
		
		elemBlock.appendChild(elemHeader);
		elemHeader.appendChild(elemBtnOptions);
		elemHeader.appendChild(elemBtnHide);
		elemHeader.appendChild(elemTitle);
	}
	
	elemBlock.appendChild(elemContent);
	
	elemContent.appendChild(content);
	
	return elemBlock;
	
}


/**
 * @return {HTMLDivElement}
 * */
export function createPlusBlock() {
	
	let elemNewBlock = createEmptyBlock();
	
	let elemOptions = document.createElement('div');
	elemOptions.classList.add(CLASS_MINI_BTN, CLASS_IMG_PLUS);
	elemOptions.addEventListener('click', () => elemNewBlock.dispatchEvent(new Event('plus')));
	
	elemNewBlock.appendChild(elemOptions);
	
	return elemNewBlock;
	
}

/**
 * @param {string} title
 * @param {{name:string, func: function(any)}[]} options
 * @return HTMLDivElement
 * */
export function createOptionsList(title, options) {
	
	let elemOptionList = document.createElement('div');
	elemOptionList.classList.add(CLASS_OPTIONS_LIST, CLASS_NOSELECT);
	
	let elemTitle = document.createElement('div');
	elemTitle.classList.add(CLASS_TITLE);
	elemTitle.innerText = title;
	elemOptionList.appendChild(elemTitle);
	
	
	for (let i = 0; i < options.length; i++) {
		
		let optName = options[i].name;
		let optFunc = options[i].func;
		
		let elemOption = document.createElement('p');
		elemOption.innerText = optName;
		elemOption.addEventListener('click', optFunc);
		
		elemOptionList.appendChild(elemOption);
	}
	
	return elemOptionList;
	
}


/**
 * @return HTMLDivElement
 * */
export function createScreen() {
	
	let elemScreen = document.createElement('div');
	elemScreen.classList.add(CLASS_SCREEN);
	
	return elemScreen;
	
}
