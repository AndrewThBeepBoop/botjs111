const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
const config = require('../conf/config.json');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    if(!message.member.hasPermission("BAN_MEMBERS"))return(message.reply("У вас нет прав"))//проверяем разрешения у автора сообщения как участника(в данном случае нужно право банить участников у роли). Если у него нет этого права - бот ответит что "сер, у вас прав нет"
    let toban = message.mentions.members.first()//объявляем того кого будем банить упомянув его
    if(!toban)return(message.reply("please mention a member to ban"))//если не упомянут участник, то бот попросит упомянуть его
    let reason = args.splice(1).join(" ")//нашей причиной будет массив args(он же аргументы), элементы которого соединены пробелом начиная со второго

    const ban_embed = new Discord.MessageEmbed()//объявляем наш embed, можно и без него, но с ним куда красивее
    .setTitle(`${message.author.tag} забанил ${toban.user.tag}`)//ставим ему заголовок с информацией о том кто и кого забанил
    .setDescription(`Комент : ${reason}`)//описанием будет причина
    .setColor(color)//делаем embed-у рандомный увет
    .setTimestamp();//ставим время, в которое отправили сообщение

    toban.ban().catch(err => console.log(err));
    message.channel.send(ban_embed)//и отправляем наш эмбед в канал где была использована наша команда
};
module.exports.help = {
    name: "ban"
};