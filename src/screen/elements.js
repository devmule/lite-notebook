const CLASS_SCREEN = 'ltn-screen';

const CLASS_BLOCK = 'ltn-block';
const CLASS_BLOCK_CONTENT = 'ltn-block-content';

const CLASS_SETTINGS = 'ltn-settings';
const CLASS_OPTIONS_LIST = 'ltn-option-list';
const CLASS_NOSELECT = 'ltn-noselect';
const CLASS_TITLE = 'title';

const CLASS_IMG_BURGER = 'burger';
const CLASS_IMG_PLUS = 'plus';


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
 * @param {function(HTMLElement)} [onOptionsClick=undefined]
 * @return {HTMLDivElement}
 * */
export function createContentBlock(content, onOptionsClick = undefined) {
	
	let elemContentBlock = createEmptyBlock();
	
	if (typeof onOptionsClick === 'function') {
		let elemOptions = document.createElement('div');
		elemOptions.classList.add(CLASS_SETTINGS, CLASS_IMG_BURGER);
		if (typeof onOptionsClick === 'function') {
			elemOptions.addEventListener('click', onOptionsClick.bind(this, elemOptions));
		}
		elemContentBlock.appendChild(elemOptions);
	}
	
	let elemBlockContent = document.createElement('div');
	elemBlockContent.classList.add(CLASS_BLOCK_CONTENT);
	elemContentBlock.appendChild(elemBlockContent);
	elemBlockContent.appendChild(content);
	
	return elemContentBlock;
	
}


/**
 * @param {function(HTMLElement)} onOptionsClick
 * @return {HTMLDivElement}
 * */
export function createNewBlock(onOptionsClick) {
	
	let elemNewBlock = createEmptyBlock();
	
	let elemOptions = document.createElement('div');
	elemOptions.classList.add(CLASS_SETTINGS, CLASS_IMG_PLUS);
	if (typeof onOptionsClick === 'function') {
		elemOptions.addEventListener('click', onOptionsClick.bind(this, elemOptions));
	}
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