const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
const config = require('../conf/config.json');
let color = config.color;
let rolemute = config.rolemute;

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return send("У меня нет права кикать пользователей на этом сервере!");
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    let tokick = message.guild.member(message.mentions.members.first());
    let reason = args.splice(1).join(" ")
    if(!args[0]) return message.reply("Вы не указали тег");
    if(!tokick) return message.reply("Тег не найден")

    const kick_embed = new Discord.MessageEmbed()//объявляем наш эмбед
    .setTitle(`${message.author.tag} кикнул ${tokick.user.tag}`)//заголовок с информацией(кто кикнул и кого)
    .setDescription(`Комент: ${reason}`)//причина
    .setColor(color)//ставим рандомный цвет
    .setTimestamp();//время
    
    message.channel.send(kick_embed)
};
module.exports.help = {
    name: "mute"
};