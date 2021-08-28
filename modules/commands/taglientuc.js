module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 10000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 10500);
setTimeout(() => {a({body: "ra đây chơi em " + " " + name, mentions: arraytag})} ,11000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 11500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 12000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 12500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 13000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 13500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 14000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 14500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 15500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 16000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 16500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 17000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 17500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 18000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 18500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 19000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 19500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 20500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 21000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 21500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 22000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 22500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 23000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 23500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 24500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 25000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 25500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 26000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 26500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 27000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 27500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 28500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 29000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 29500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 30000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 30500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 31000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 31500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 32500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 33000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 33500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 34000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 34500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 35000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 35500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 37000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 37500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 38000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 38500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 39000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 39500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 40500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 41000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 41500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 42000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 42500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 43000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 43500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 44500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 45000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 45500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 46000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 46500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 47000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 47500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 48500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 49000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 49500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 50000);
 }