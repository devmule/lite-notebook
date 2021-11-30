// ================================================================================================================== //
//                                                                                                                    //
//                                                   made by devmule                                                  //
//                                             https://github.com/devmule                                             //
//                                                      12.11.2021                                                    //
//                                                                                                                    //
// ================================================================================================================== //


/**
 * @typedef {string} EventType
 * */

/**
 * @typedef {function(...*)} ISubscriber
 * */

/**
 * @typedef {Object} ISubscriberDescription
 * @property {ISubscriber} subscriber
 * @property {boolean} [once] - нужно ли удалить после вызова
 * */

export default class EventEmitter {
	constructor() {
		/**
		 * @private
		 * @type {Map.<string, ISubscriberDescription[]>} */
		this.events = new Map();
	}
	
	/**
	 * Подписаться на событие определённого типа, будет срабатывать каждый раз.
	 * @param {EventType} type
	 * @param {ISubscriber} subscriber */
	on(type, subscriber) {
		if (!this.events.has(type)) this.events.set(type, []);
		this.events.get(type).push({subscriber});
	}
	
	/**
	 * Подписаться на событие определённого типа, сработает только один раз.
	 * @param {EventType} type
	 * @param {ISubscriber} subscriber */
	once(type, subscriber) {
		if (!this.events.has(type)) this.events.set(type, []);
		this.events.get(type).push({subscriber, once: true});
	}
	
	/**
	 * Вызвать событие с параметрами для функций-подписчиков.
	 * @param {EventType} type
	 * @param {...*} params */
	emit(type, ...params) {
		if (!this.events.has(type)) return;
		
		let list = [...this.events.get(type)];
		for (let i = 0; i < list.length; i++) {
			let sub = list[i];
			if (sub.once === true) {
				list.splice(i, 1);
				i--;
			}
			sub.subscriber.call(this, ...params);
		}
	}
	
	/**
	 * Удалить все подписки данного типа или все подписки только для определённой функции-подписчика, если она указана.
	 * @param {EventType} type
	 * @param {ISubscriber} [subscriber=null] */
	off(type, subscriber = null) {
		if (!this.events.has(type)) return;
		
		if (subscriber == null) {
			this.events.delete(type);
			return;
		}
		
		let list = [...this.events.get(type)];
		for (let i = 0; i < list.length; i++) {
			if (list[i].subscriber === subscriber) {
				list.splice(i, 1);
				i--;
			}
		}
	}
}
