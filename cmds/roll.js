const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    let mess = message
    var name = [
        "1","2","3","4","5","6"
    ];
  
    var RandElement = name[Math.floor(Math.random() * (name.length))]; // Выбор случайного элемента из массива
    mess.reply(`бросил кубик и выпало ${RandElement} из 6.`) // Отправка сообщения со случайным элементом из массива в чат
};
module.exports.help = {
    name: "roll"
};