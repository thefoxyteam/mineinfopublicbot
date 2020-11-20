const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {
    let mcape = args.slice(0).join(' ');
    if (mcape.length < 1) return message.reply('**Di un user**')


let cape = await mc.body(mcape)
const embedbody = new Discord.MessageEmbed()
.setTitle("Aquí tienes la capa")
.setImage(cape)
message.channel.send(embedbody)

}


exports.conf = {
  aliases: ['bd'],
  permLevel: 0
};

exports.help = {
  name: 'mccape',
  description: 'capa de un usuario!',
  usage: 'mccape <username>'
};

