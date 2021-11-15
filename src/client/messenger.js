import EventEmitter from "../utils/EventEmitter";

/**
 * @typedef {Object} IMessage
 * @property {string} sender
 * @property {string} type
 * @property {number} [uid]
 * @property {any} data
 * */

let reqUID = 0;

/**
 * @param {string} sender
 * @param {string} type
 * */
let typename = (sender, type) => sender + ':' + type;

export default class AppMessenger extends EventEmitter {
	constructor() {
		super();
		this.senders = new Map();
		this.requests = new Map();
		window.addEventListener("message", e => this.onMessage(e.data), false);
	}
	
	/**
	 * @param {string} name
	 * @param {HTMLIFrameElement} sender
	 * */
	addSender(name, sender) {
		if (this.senders.has(name)) throw new Error(`Name \"${name}\" already exist!`);
		this.senders.set(name, sender);
	}
	
	/**
	 * @param {string} str
	 * */
	onMessage(str) {
		try {
			
			/** @type {IMessage} */
			let msg = JSON.parse(str);
			let sender = this.senders.get(msg.sender);
			
			if (!sender) {
				console.warn(`No such sender name \"${name}\"!`);
				return;
			}
			
			if (msg.uid != null && this.requests.has(msg.uid)) {
				this.requests.get(msg.uid)(msg.data);
				this.requests.delete(msg.uid);
			}
			
			this.emit({
				type: typename(msg.sender, msg.type),
				msg: msg,
			});
			
		} catch (e) {
			console.warn(e);
		}
	}
	
	/**
	 * @param {string} name
	 * @param {string} type
	 * @param {any} data
	 * */
	send(name, type, data) {
		
		if (!this.senders.has(name)) throw new Error(`Name \"${name}\" not exist!`);
		let to = this.senders.get(name);
		
		to.contentWindow.postMessage(JSON.stringify({type, data}), window.location.href);
		
	}
	
	/**
	 * @param {string} name
	 * @param {string} type
	 * @param {any} [data]
	 * @return {Promise.<IMessage>}
	 * */
	request(name, type, data) {
		
		if (!this.senders.has(name)) throw new Error(`Name \"${name}\" not exist!`);
		let to = this.senders.get(name);
		
		return new Promise(resolve => {
			let uid = reqUID++;
			
			to.contentWindow.postMessage(JSON.stringify({type, data, uid}), window.location.href);
			this.requests.set(uid, resolve);
			
		});
		
	}
}
