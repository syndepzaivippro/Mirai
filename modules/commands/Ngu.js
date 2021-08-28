const fs = require("fs");
module.exports.config = {
name: "Ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ngu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
				body: "...",
				attachment: fs.createReadStream(__dirname + `/noprefix/Huấn hoa hồng m ngu thì m chết mẹ m đi kêu cái gì (1).mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}