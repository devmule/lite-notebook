export default class LNBScreen {
	constructor() {
		
		// основной элемент
		this.screen = document.createElement("div");
		this.screen.classList.add("full-fill");
		
		this.cont = document.createElement("div");
		this.cont.style.position = "absolute";
		this.cont.classList.add("full-fill");
		this.screen.appendChild(this.cont);
		
		this.loader = document.createElement("div");
		this.loader.classList.add("loader-back");
		this.loader.innerHTML = `<div class="loader"><div></div><div></div><div></div><div></div></div>`;
		this.screen.appendChild(this.loader);
	}
	
	get loading() {
		return !this.loader.classList.contains("loader-hidden");
	}
	
	set loading(val) {
		if (val) this.loader.classList.remove("loader-hidden");
		else this.loader.classList.add("loader-hidden");
	}
}
