const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {
    let mhead = args.slice(0).join(' ');
    if (mhead.length < 1) return message.reply('**Di un user**')


let head = await mc.cabeza(mhead)
const embedbody = new Discord.MessageEmbed()
.setTitle("Aquí tienes la cabeza")
.setImage(head)
message.channel.send(embedbody)

}


exports.conf = {
  aliases: ['bd'],
  permLevel: 0
};

exports.help = {
  name: 'mchead',
  description: 'caneza de un usuario!',
  usage: 'mchead <username>'
};

