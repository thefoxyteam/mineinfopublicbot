const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

const mc = require("mineinfo")
exports.run = async(client, message, args) => {


let fox = await mc.fox()
const EmbedFox = new Discord.MessageEmbed()
.setTitle("Me encanta😍")
.setImage(fox)
message.channel.send(EmbedFox)


};


exports.conf = {
  aliases: ['fx'],
  permLevel: 0
};

exports.help = {
  name: 'fox',
  description: 'Fotos de zorros!',
  usage: 'fox'
};
