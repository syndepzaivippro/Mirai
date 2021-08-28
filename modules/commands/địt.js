module.exports.config = {
	name: "Địt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Syn",
	description: "Cắc Cùm Cum",
	commandCategory: "Địt 1 ai đó",
	cooldowns: 5
};

module.exports.run = ({ event, api }) => api.sendMessage(`Tà dâm con cặc cút`, event.threadID, event.messageID);