const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    message.channel.send('https://i.ytimg.com/vi/a4g89nvixdI/maxresdefault.jpg')
};
module.exports.help = {
    name: "nuhai"
};