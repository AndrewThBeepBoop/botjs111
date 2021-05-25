const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let color = config.color;
let rolemute = config.rolemute

module.exports.run = async (bot,message,args) => {
    
    message.delete().catch();
    try{
    
    function send (msg){
        message.channel.send(msg);
    }
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return send("У меня нет права выдавать Warn пользователей на этом сервере!");
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    let rUser = message.guild.member(message.mentions.members.first());
    let reason = args.splice(1).join(" ")
    if(!args[0]) return message.reply("Вы не указали тег");
    if(!rUser) return message.reply("Тег не найден")

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} замутил ${rUser.user.tag}`) //заголовок с информацией(кто кикнул и кого)
    .setDescription(`Комент: ${reason}`)//причина
    .setColor(color)//ставим рандомный цвет
    .setTimestamp();//время

    var role = message.guild.roles.cache.find(role => role.id === rolemute);
    rUser.roles.add(role)
    message.channel.send(embed);
    }catch(err){
        if(err.name === "ReferenceError") console.log("У вас ошибка")
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "mute"
};