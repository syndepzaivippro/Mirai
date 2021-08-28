module.exports.config = {
	name: "2fa",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "get mã 2fa cho bạn ?",
	commandCategory: "economy",
	usages: "[mã 2 yếu tố]",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
let axios = require('axios')
let { threadID, senderID, messageID } = event;
if(args.length == 0)  api.sendMessage("Thiếu mã 2fa?",threadID,messageID)
else {
	let res = await axios.get(encodeURI(`http://api.hextool.tk/2fa.php?2fa=${args[0]}`));
	console.log(`\x1b[37m[ \x1b[36m2FA \x1b[37m] » \x1b[32mMã 2fa : \x1b[33m${res.data}`)
	var msg = `${res.data}`
	api.sendMessage(msg,threadID,messageID);
}
}