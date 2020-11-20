const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {
    let mbody = args.slice(0).join(' ');
    if (mbody.length < 1) return message.reply('**Di un user**')


let body = await mc.body(mbody)
const embedbody = new Discord.MessageEmbed()
.setTitle("Aquí tienes el cuerpo")
.setImage(body)
message.channel.send(embedbody)

}


exports.conf = {
  aliases: ['bd'],
  permLevel: 0
};

exports.help = {
  name: 'mcbody',
  description: 'Cuerpo de un usuario!',
  usage: 'mcbody <username>'
};

