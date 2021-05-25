const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    message.channel.send('https://pbs.twimg.com/media/Et3c-KIXYAEVprb.jpg')
};
module.exports.help = {
    name: "aboba"
};