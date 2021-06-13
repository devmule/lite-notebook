class MsgFrame {
	constructor() {
		if (!MsgFrame.init) MsgFrame.init = true;
		else throw new Error(`Messenger is already init!`);
		
	}
}
