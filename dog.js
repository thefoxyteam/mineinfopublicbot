const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {

const mc = require("mineinfo")
let dog = await mc.dog()

const dogEmbed = new Discord.MessageEmbed()
.setTitle("Que cute este perro no?")
.setImage(dog)
message.channel.send(dogEmbed)

};


exports.conf = {
  aliases: ['dg'],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'Fotos de perros!',
  usage: 'dog'
};
