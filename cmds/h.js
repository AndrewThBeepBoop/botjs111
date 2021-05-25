const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    let mess = message;
    mess.channel.send('Монета подбрасывается...')
    var name = [
        ":full_moon: Орёл!",":new_moon: Решка!",":last_quarter_moon: Монета упала ребром!"
    ];
  
    var RandElement = name[Math.floor(Math.random() * (name.length))];

    mess.reply(RandElement)
};
module.exports.help = {
    name: "h"
};