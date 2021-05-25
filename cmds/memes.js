const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Мемы")
    .setColor(color)
    .addField(`1.  *${prefix}aboba*`,'Мем "АБОБА"')
    .addField(`2.  *${prefix}ricardo*`,'Рикардо милос')
    .addField(`3.  *${prefix}nuhai*`,'Нюхай бебру')
    message.channel.send(embed)
};
module.exports.help = {
    name: "memes"
};