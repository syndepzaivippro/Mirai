const fs = require("fs");
module.exports.config = {
name: "goibot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "goibot",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
        var tl = ["chào bạn tôi là Wibu Bot","bạn gọi tôi có việc gì?","tôi yêu bạn vai lon","[ Góc Donate ] có thể donate thôi chứ?","Biết admin bot đẹp trai không?","Có việc gì liên quan đến lỗi bot liên hệ admin nhé sài lệnh .ad hoặc .menu có link đấy :3"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
	if (event.body.indexOf("bot")==0 || (event.body.indexOf("Bot")==0)) {
		var msg = {
				body: rand
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}