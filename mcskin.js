const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {
    let mbody = args.slice(0).join(' ');
    if (mbody.length < 1) return message.reply('**Di un user**')


let skin = await mc.skin(mbody)
const embedskin = new Discord.MessageEmbed()
.setTitle("Aquí tienes la skin")
.setImage(skin)
message.channel.send(embedskin)

}


exports.conf = {
  aliases: ['sk'],
  permLevel: 0
};

exports.help = {
  name: "mcskin",
  description: 'skin de un usuario!',
  usage: 'mcskin <username>'
};
