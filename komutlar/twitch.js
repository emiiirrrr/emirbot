const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "twitch",
    async run (client, message, args) {
      const embed = new MessageEmbed()
      .setColor("PURPLE")
      .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/f539d379-0eba-41b0-9ae7-a53708ff4cf1-profile_image-300x300.png')
      .setAuthor('Twitch', 'http://pngimg.com/uploads/twitch/twitch_PNG34.png')
      .setTitle('EmiiirrrCobain')
      .setURL('https://www.twitch.tv/emiiirrrcobain')
      .setDescription('Bağlantıya tıklayarak Twitch kanalıma gidebilirsin.\n\nTakip ederek, abone olarak veya bağış atarak bana destek olabilirsin. ^^')
      .addField('Diğer Bağlantılar', '[Instagram](https://www.instagram.com/emir.vn/?hl=tr) | [ByNoGame](https://www.bynogame.com/destekle/emiiirrrcobain) | [Oyunfor](https://www.oyunfor.com/twitch-donate/emiiirrrcobain)')
      message.channel.send(embed)
    }
  }
  