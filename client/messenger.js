import EventEmitter from "../utils/EventEmitter.js";

/**
 * @typedef {Object} IMessage
 * @property {string} sender
 * @property {string} type
 * @property {number} [uid]
 * @property {any} data
 * @property {boolean} ltn
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
	 * @param {IMessage} msg
	 * */
	onMessage(msg) {
		if (!msg.ltn) return;
		
		let sender = this.senders.get(msg.sender);
		
		if (!sender) {
			console.warn(`No such sender name \"${msg.sender}\"!`);
			return;
		}
		
		if (msg.uid != null && this.requests.has(msg.uid)) {
			this.requests.get(msg.uid)(msg.data);
			this.requests.delete(msg.uid);
		}
		
		this.emit(typename(msg.sender, msg.type), msg);
		
	}
	
	/**
	 * @param {string} name
	 * @param {string} type
	 * @param {any} data
	 * */
	send(name, type, data) {
		
		if (!this.senders.has(name)) throw new Error(`Name \"${name}\" not exist!`);
		let to = this.senders.get(name);
		
		to.contentWindow.postMessage({type, data, ltn: true}, window.location.href);
		
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
			
			to.contentWindow.postMessage({type, data, uid, ltn: true}, window.location.href);
			this.requests.set(uid, resolve);
			
		});
		
	}
	
	waitMessage(name, type) {
		return new Promise(resolve => {
			let key = typename(name, type);
			this.once(key, resolve);
		})
	}
}
