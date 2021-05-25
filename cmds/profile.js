const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    let a = message.guild.member(message.mentions.members.first());
    if(!args[0]) {
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return send("У меня нет права выдавать Warn пользователей на этом сервере!");
        let b = message.author
        const embed = new Discord.MessageEmbed()
        .setDescription("Информация об игроке")
        .setColor(color)
        .addField("Имя",b.username)
        .addField("Тэг",b.tag)
        .addField("Дискриминатор",b.discriminator)
        .addField("Создание аккаунта",b.createdAt)
        .addField("ID",b.id)
        .addField("Вы бот?",b.bot)
        message.channel.send(embed)

    };
    if(!a) return
    const embed = new Discord.MessageEmbed()
    .setDescription("Информация об игроке")
    .setColor(color)
    .addField("Имя",a.user.username)
    .addField("Тэг",a.user.tag)
    .addField("Дискриминатор",a.user.discriminator)
    .addField("Создание аккаунта",a.user.createdAt)
    .addField("ID",a.id)
    .addField("Бот?",a.user.bot)
    message.channel.send(embed)
};
module.exports.help = {
    name: "profile"
};