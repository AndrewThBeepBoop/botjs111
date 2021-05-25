const { time } = require('console');
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const bot = new Discord.Client(); // Объявляем, что bot - бот
bot.commands = new Discord.Collection();
const fs = require('fs');
const { Server } = require('http');
let config = require('./conf/config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
let mess = config.messVerify;
let mess1 = config.messRole;
let ro = config.roledefult;
let ro1 = config.roleanime;
let ro2 = config.roleminecrafter;
let ro3 = config.rolecs;
let ro4 = config.rolefortnite;

/*  
 RANDOM
 #000000
 #00FF00
 #008B8B
 #008080
 #fcdb03
*/ 

const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
bot.on('raw', async event => {
    if(event.t == 'MESSAGE_REACTION_REMOVE' || event.t == 'MESSAGE_REACTION_ADD') {
        const { d: data } = event;
        const user = await bot.users.fetch(data.user_id);
        const message = await bot.channels.cache.get(data.channel_id).messages.fetch(data.message_id);
        const emoji = data.emoji.name;
        const reaction = message.reactions.cache.get(emoji);
        bot.emit(events[event.t], reaction, user);
    }
});
bot.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id == mess || reaction.message.id ==  mess) {
            var message = reaction.message;
            if (reaction.emoji.name == "✅") {
                var role = message.guild.roles.cache.find(role => role.id === ro);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.add(role)
            }
    }
});
bot.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id == mess1 || reaction.message.id ==  mess1) {
            var message = reaction.message;
            if (reaction.emoji.name == "✨") {
                var role = message.guild.roles.cache.find(role => role.id === ro1);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.add(role)
            }
            if (reaction.emoji.name == "🏹") {
                var role = message.guild.roles.cache.find(role => role.id === ro2);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.add(role)
            }
            if (reaction.emoji.name == "🌐") {
                var role = message.guild.roles.cache.find(role => role.id === ro3);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.add(role)
            }
            if (reaction.emoji.name == "⛏") {
                var role = message.guild.roles.cache.find(role => role.id === ro4);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.add(role)
            }
    }
});
bot.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.id == mess1 || reaction.message.id ==  mess1) {
            var message = reaction.message;
            if (reaction.emoji.name == "✨") {
                var role = message.guild.roles.cache.find(role => role.id === ro1);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.remove(role)
            }
            if (reaction.emoji.name == "🏹") {
                var role = message.guild.roles.cache.find(role => role.id === ro2);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.remove(role)
            }
            if (reaction.emoji.name == "🌐") {
                var role = message.guild.roles.cache.find(role => role.id === ro3);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.remove(role)
            }
            if (reaction.emoji.name == "⛏") {
                var role = message.guild.roles.cache.find(role => role.id === ro4);
                let user1 = message.guild.members.cache.get(user.id);
                user1.roles.remove(role)
            }
    }
});
fs.readdir('./cmds/',(err,files) =>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) console.log("Команды не найдены!!");
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!!`);
        bot.commands.set(props.help.name,props);
    });
    console.log(`Загружено(-а) ${jsfiles.length} комманд(-а,-ы)`);
});

bot.on("ready", function() {
  console.log(bot.user.username + " запустился!");
  bot.user.setPresence({
      status: 'online',
      activity: {
          type: 'PLAYING',
          name: `${prefix}help`,
        },
    });
});

bot.on('message', async message => { // Реагирование на сообщения
    console.log(`\n\n\n╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮\n${message.createdAt}"${message.channel.name}"\n${message.author.tag}\n\n${message.content}\n\n((${message.author.id}))\n╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let user = message.author.username;
    let userid = message.author.id;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
});



bot.login(token); // Авторизация бота