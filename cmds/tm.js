const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let color = config.color;
let rolemute = config.rolemute

module.exports.run = async (bot,message,args) => {
    
    message.delete().catch();
    try{
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return send("У меня нет права выдавать Warn пользователей на этом сервере!");
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    const mess = message;
    let messageArray = message.content.split(" ");
    const arggs = messageArray[2].toLowerCase(); // Все аргументы за именем команды с префиксом
    const amount = arggs // Количество сообщений, которые должны быть удалены
    if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
    if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 
    let rUser = message.guild.member(message.mentions.members.first());
    let reason = args.splice(3).join(" ")
    if(!args[0]) return message.reply("Вы не указали тег");
    if(!rUser) return message.reply("Тег не найден")
    let re = messageArray[3].toLowerCase();
    
    if(re === 's') {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} времено замутил ${rUser.user.tag}`) //заголовок с информацией(кто кикнул и кого)
        .setDescription(`Reason : ${reason}`)//причина
        .addField('Время (в секундах)',amount)
        .addField(`${rUser.user.tag}`,`<@${rUser.user.id}>`)
        .setColor(color)//ставим рандомный цвет
        .setTimestamp();//время
        message.channel.send(`<@${rUser.user.id}>`,embed).then(ms =>{
            ms.delete({timeout: (amount*1000)})
        });
        var role = message.guild.roles.cache.find(role => role.id === rolemute);
        rUser.roles.add(role)
        setTimeout(() => {
            rUser.roles.remove(role)
        }, (amount*1000));
    }
    if(re === 'm') {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} времено замутил ${rUser.user.tag}`) //заголовок с информацией(кто кикнул и кого)
        .setDescription(`Reason : ${reason}`)//причина
        .addField('Время (в минутах)',amount)
        .addField(`${rUser.user.tag}`,`<@${rUser.user.id}>`)
        .setColor(color)//ставим рандомный цвет
        .setTimestamp();//время
        message.channel.send(`<@${rUser.user.id}>`,embed).then(ms =>{
            ms.delete({timeout: (amount*60000)})
        });
        var role = message.guild.roles.cache.find(role => role.id === rolemute);
        rUser.roles.add(role)
        setTimeout(() => {
            rUser.roles.remove(role)
        }, (amount*60000));
    }
    if(re === 'h') {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} времено замутил ${rUser.user.tag}`) //заголовок с информацией(кто кикнул и кого)
        .setDescription(`Reason : ${reason}`)//причина
        .addField('Время (в часах)',amount)
        .addField(`${rUser.user.tag}`,`<@${rUser.user.id}>`)
        .setColor(color)//ставим рандомный цвет
        .setTimestamp();//время
        message.channel.send(`<@${rUser.user.id}>`,embed).then(ms =>{
            ms.delete({timeout: (amount*3600000)})
        });
        var role = message.guild.roles.cache.find(role => role.id === rolemute);
        rUser.roles.add(role)
        setTimeout(() => {
            rUser.roles.remove(role)
        }, (amount*3600000));
    }
    if(re === 'd') {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} времено замутил ${rUser.user.tag}`) //заголовок с информацией(кто кикнул и кого)
        .setDescription(`Reason : ${reason}`)//причина
        .addField('Время (в днях)',amount)
        .addField(`${rUser.user.tag}`,`<@${rUser.user.id}>`)
        .setColor(color)//ставим рандомный цвет
        .setTimestamp();//время
        message.channel.send(`<@${rUser.user.id}>`,embed).then(ms =>{
            ms.delete({timeout: (amount*86400000)})
        });
        var role = message.guild.roles.cache.find(role => role.id === rolemute);
        rUser.roles.add(role)
        setTimeout(() => {
            rUser.roles.remove(role)
        }, (amount*86400000));
    }
    

    }catch(err){
        if(err.name === "ReferenceError") console.log("У вас ошибка")
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "tm"
};