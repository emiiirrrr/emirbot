const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: 'lanetle',
    async run (client, message, args) {
        let üye = message.author
        const embed = new MessageEmbed()
         .setImage('https://media.giphy.com/media/DrKb6ZgBpOJuswlQ5l/giphy.gif')
         .setDescription('༼つಠ益ಠ༽つ ─=≡ΣO))   lanetlendin ...')
         .setColor('BLACK')
         .setAuthor(`${üye.username},` + ` casted a spell (korkunçlu anime kızı sesleri ):`)
         .setFooter(`${üye.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
        message.channel.send(embed)
    }
  }
  