const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    message.delete().catch();
    const embed = new Discord.MessageEmbed()
    .setTitle("правила")
    .setColor(color)
    .addField(`1.  Баны навсегда\n2.  SPAM/FLOOD - Мут\n3.  Оск админов - мут\n4.  Отметка людей просто так несколько раз - мут\n5.  попытки крашнуть серва - бан\n6.  получить роль не легальным путём - бан`,"Версия 2021.1")
    message.channel.send(embed)
};
module.exports.help = {
    name: "rules"
};