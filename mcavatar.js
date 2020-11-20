const { MessageEmbed } = require('discord.js');
        Discord = require("discord.js")
const mc = require("mineinfo")
exports.run = async(client, message, args) => {
    let mavatar = args.slice(0).join(' ');
    if (mavatar.length < 1) return message.reply('**Di un user**')


let avatar = await mc.avatar(mavatar)
const embedavatar = new Discord.MessageEmbed()
.setTitle("Aquí tienes el avatar")
.setImage(avatar)
message.channel.send(embedavatar)

}


exports.conf = {
  aliases: ['av'],
  permLevel: 0
};

exports.help = {
  name: 'mcavatar',
  description: 'avatar de un usuario!',
  usage: 'mcavatar <username>'
};

