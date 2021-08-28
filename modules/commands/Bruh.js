const fs = require("fs");
module.exports.config = {
name: "Bruh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "Bruh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bruh")==0 || (event.body.indexOf("Bruh")==0)) {
		var msg = {
				body: "Bủh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx (1).mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}