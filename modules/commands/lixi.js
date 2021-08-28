const fs = require("fs");
module.exports.config = {
name: "lixi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "lixi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lixi")==0 || (event.body.indexOf("Lixi")==0)) {
		var msg = {
				body: "LIXICONCAC",
				attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}