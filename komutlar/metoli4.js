const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: 'yargıla',
    async run (client, message, args) {
        let üye = message.author
        const embed = new MessageEmbed()
         .setImage('https://media.giphy.com/media/J2o4FD1KBshBz9xkla/giphy.gif')
         .setDescription('彡ﾟ◉ω◉ )つー☆* yargılandın ....')
         .setColor('PURPLE')
         .setAuthor(`${üye.username},` + ` casted a spell (anime kızı hiyaası):`)
         .setFooter(`${üye.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
        message.channel.send(embed)
    }
  }
  