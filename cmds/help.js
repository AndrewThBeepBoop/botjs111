const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Комманды")
    .setColor(color)
    .addField(`1.  *${prefix}memes*`,'Мемы')
    .addField(`2.  *${prefix}help*`,'Комманды')
    .addField(`3.  *${prefix}i*`,'Мини-игры')
    .addField(`4.  *${prefix}adminhelp*`,'Административные комманды')
    .addField(`5.  *${prefix}profile*`,'профиль');
    message.channel.send(embed)
};
module.exports.help = {
    name: "help"
};