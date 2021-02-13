const moment = require('moment')
require('moment-duration-format')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: 'söndür',
    async run (client, message, args) {
        let üye = message.author
        const embed = new MessageEmbed()
         .setImage('https://media.giphy.com/media/bmpmPZ85HUbRngFNtl/giphy.gif')
         .setDescription('(∩^o^)⊃━☆゜.* Ultra söndürme büyüsü piçuvvvvvvvv!')
         .setColor('BLUE')
         .setAuthor(`${üye.username},` + ` casted a spell (anime kızı hiyaası):`)
         .setFooter(`${üye.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
        message.channel.send(embed)
    }
  }
  