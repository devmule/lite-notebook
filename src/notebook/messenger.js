import EventEmitter from "../utils/EventEmitter";

/**
 * @typedef {Object} IMessage
 * @property {string} sender
 * @property {string} type
 * @property {number} [uid]
 * @property {any} data
 * */

export default class NotebookMessenger extends EventEmitter {
	constructor(senderName) {
		super();
		this.senderName = senderName;
		window.addEventListener("message", e => this.onMessage(e.data), false);
	}
	
	/**
	 * @param {string} str
	 * */
	onMessage(str) {
		/** @type {IMessage} */
		let msg = JSON.parse(str);
		this.emit(msg);
	}
	
	/**
	 * @param {string} type
	 * @param {any} data
	 * */
	send(type, data) {
		
		/** @type{IMessage} */
		let msg = {
			type, data, sender: this.senderName
		};
		
		window.parent.postMessage(JSON.stringify(msg), window.location.href);
		
	}
	
	/**
	 * @param {IMessage} toMessage
	 * @param {any} [data]
	 * */
	response(toMessage, data = undefined) {
		
		/** @type{IMessage} */
		let msg = {
			type: toMessage.type,
			data: data,
			sender: this.senderName,
			uid: toMessage.uid
		};
		
		window.parent.postMessage(JSON.stringify(msg), window.location.href);
		
	}
}
