const Discord = module.require("discord.js");
const fs = require('fs');

module.exports.run = async (bot,message,args) => {
    message.channel.send('> **Награды за помощь серверу** \n> `Ввести новичка в курс дела` - __500__:rubl: \n> `Мирно разрешить конфликт` - __3000__:rubl: \n> `Сдать нарушителя модератору/админу` - от __500__:rubl: до __5000__:rubl: ```Необходимы доказательства``` \n> `Предложить хорошую и рабочую идею для улучшения сервера` - __1000__:rubl: \n> `Пригласить человека на сервер (Доступно с 30 уровня)` - __500__:rubl: за человека. \n> ```Главное, не кидайте инвайт просто так, это может повлечь внесение нашего сервера в чёрный список``` \n> `Апнуть сервер (s.up)` \n> __100__:rubl: за один ап');
};

module.exports.help = {
    name: 'server-work'
};