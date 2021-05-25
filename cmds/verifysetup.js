const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    const mess = message;
    if(!message.member.hasPermission("KICK_MEMBERS")) return mess.reply("Вы не имеете прав на использование этой команды")

    mess.delete().catch(); // Удаление сообщения пользователя после отправки 

    mess.channel.send(`Нажми на ✅ для авторизации.`)
    .then(function (message) {
      message.react("✅")
    });
};
module.exports.help = {
    name: "verifysetup"
};