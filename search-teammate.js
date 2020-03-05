const Discord = module.require("discord.js");
const fs = require('fs');

module.exports.run = async (bot,message,args) => {
    message.channel.send(`||@everyone|| \n${message.author.username} хочет поиграть в ${args}`);
};

module.exports.help = {
    name: 'search-teammate'
};