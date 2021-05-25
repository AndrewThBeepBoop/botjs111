const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Мини-гры")
    .setColor(color)
    .addField(`1.  *${prefix}h*`,'Орёл и Решка (ОиР)')
    .addField(`2.  *${prefix}roll*`,'Бросить кубик')
    message.channel.send(embed)
};
module.exports.help = {
    name: "i"
};