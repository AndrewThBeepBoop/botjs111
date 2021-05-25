const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    message.channel.send('https://www.meme-arsenal.com/memes/a9e0ed6a2ea2308eef1ff90f023db769.jpg')
};
module.exports.help = {
    name: "ricardo"
};