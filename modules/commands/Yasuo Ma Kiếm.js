const fs = require("fs");
module.exports.config = {
name: "yasuo ma kiếm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "yasuo ma kiếm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yasuo")==0 || (event.body.indexOf("Yasuo")==0)) {
		var msg = {
				body: "hasagi",
				attachment: fs.createReadStream(__dirname + `/noprefix/video-1625482541.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}