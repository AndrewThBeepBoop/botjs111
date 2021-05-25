const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return send("Вы не имеете прав на использование этой команды")
    const mess = message;
    const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
    if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
    if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 

    if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
    if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1

    async function delete_messages() { // Объявление асинхронной функции

        await mess.channel.messages.fetch({
            limit: amount
        }).then(messages => {
            mess.channel.bulkDelete(messages)
        })
};
delete_messages(); // Вызов асинхронной функции
};
module.exports.help = {
    name: "clear"
};