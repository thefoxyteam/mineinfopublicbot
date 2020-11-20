const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

const mc = require("mineinfo")
exports.run = async(client, message, args) => {


let memes = await mc.meme()
const EmbedMeme = new Discord.MessageEmbed()
.setTitle("Momos")
.setImage(memes)
message.channel.send(EmbedMeme)


};


exports.conf = {
  aliases: ['mm'],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'manda momos!',
  usage: 'meme'
};
