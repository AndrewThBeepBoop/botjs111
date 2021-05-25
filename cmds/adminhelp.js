const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    const embed = new Discord.MessageEmbed()
    .setTitle("Административные комманды")
    .setColor(color)
    .addField(`1.  *${prefix}ban* {ник} {Коментарий}`,'Бан')
    .addField(`2.  *${prefix}clear* {Число =< 100}`,'Удаление сообщений')
    .addField(`3.  *${prefix}kick* {ник} {Коментарий}`,'Удаления сообщений')
    .addField(`4.  *${prefix}say* {Сообщение}`,'Объявление')
    .addField(`5.  *${prefix}warn* {ник} {Коментарий}`,'Warn')
    .addField(`6.  *${prefix}mute* {ник} {Коментарий}`,'Замутить') 
    .addField(`7.  *${prefix}tm* {ник} {время} {s/m/h/d} {Коментарий}`,'Замутить(временно)') 
    .addField(`8.  *${prefix}unmute* {ник}`,'Размутить')
    .addField(`9.  *${prefix}profile* {ник}`,'профиль')
    .addField(`10.  *${prefix}verifysetup*`,'Устоновщик Verify')
    .addField(`11.  *${prefix}rolessetup*`,'Устоновщик Roles')
    .addField(`12.  *${prefix}rules*`,'Устоновщик Rules');
    message.channel.send(embed)
};
module.exports.help = {
    name: "adminhelp"
};