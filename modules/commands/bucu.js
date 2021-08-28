module.exports.config = {
    name: "bucu",
    version: "2.2.2",
    hasPermssion: 0,
    credits: "CHIP2502",
    description: "",
    commandCategory: "general",
    usages: "[@tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'bucu.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/5eLZWFX.jpg", path);
}
async function makeImage({ one, two }) {    
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bucu_image = await jimp.read(__root + "/bucu.png");
    let pathImg = __root + `/bucu_${one}_${two}.png`;
    let avatarOne = (await axios.get(`https://meewmeew.info/avatar/${one}`)).data;    
    let circleOne = await jimp.read(await circle(Buffer.from(avatarOne, 'utf-8')));
    bucu_image.composite(circleOne.resize(180, 180), 264, 220).composite(circleTwo.resize(999, 999), 999, 999);
    
    let raw = await bucu_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Vui lòng tag 1 người.", threadID, messageID);
    else {
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Cứ tiếp tục bíu đê😘😘\nĐừng ngại🥳", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}