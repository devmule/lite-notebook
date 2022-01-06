import EventEmitter from "../utils/EventEmitter.js";

/**
 * @typedef {Object} IMessage
 * @property {string} sender
 * @property {string} type
 * @property {number} [uid]
 * @property {any} data
 * @property {boolean} ltn
 * */

export default class NotebookMessenger extends EventEmitter {
	constructor(senderName) {
		super();
		this.senderName = senderName;
		window.addEventListener("message", e => this.onMessage(e.data), false);
	}
	
	/**
	 * @param {IMessage} msg
	 * */
	onMessage(msg) {
		if (!msg.ltn) return;
		this.emit(msg.type, msg);
	}
	
	/**
	 * @param {string} type
	 * @param {any} data
	 * */
	send(type, data) {
		
		/** @type{IMessage} */
		let msg = {
			type, data, sender: this.senderName, ltn: true
		};
		
		window.parent.postMessage(msg, window.location.href);
		
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
			uid: toMessage.uid,
			ltn: true,
		};
		
		window.parent.postMessage(msg, window.location.href);
		
	}
}
