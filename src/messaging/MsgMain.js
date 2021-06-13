class MsgMain {
	constructor() {
		if (!MsgMain.init) {
			MsgMain.init = true;
		} else throw new Error(`Messenger is already init!`);
		
		this.msgUid = 0;
		this.msgCallbacks = {};
	}
	
	sendSync(msg) {
		return new Promise((resolve, reject) => {
			msg.uid = this.msgUid++;
			this.msgCallbacks[msg.uid] = () => resolve();
		});
	}
}
