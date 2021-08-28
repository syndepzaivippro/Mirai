const fs = require("fs");
module.exports.config = {
name: "dark",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "dark",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dark")==0 || (event.body.indexOf("Dark")==0)) {
		var msg = {
				body: "Dảk",
				attachment: fs.createReadStream(__dirname + `/noprefix/audioclip-1625626348000-5172.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}