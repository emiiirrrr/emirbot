const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: 'kutsa',
    async run (client, message, args) {
        let üye = message.author
        const embed = new MessageEmbed()
         .setImage('https://media.giphy.com/media/13QszPM0Xl8RyOVvNg/giphy.gif')
         .setDescription('(∩^o^)⊃━☆゜.* Ultra kutsama büyüsü haçiyaaaaa!')
         .setColor('YELLOW')
         .setAuthor(`${üye.username},` + ` casted a spell (anime kızı hiyaası):`)
         .setFooter(`${üye.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
        message.channel.send(embed)
    }
  }
  