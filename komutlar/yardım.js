module.exports = {
  kod: "yardım",
  aliases: ['help'],
  async run (client, message, args) {
    const Discord = require('discord.js')
    const yardım = new Discord.MessageEmbed()
    .setAuthor('Komutlar', message.author.displayAvatarURL({ dynamic: true }))
    .setColor('FF5252')
    .addField('Moderasyon Komutları :',[
      '`ban` `duyur` `kick` `rolver` `sil` `slowmode` `unban`'
    ])
    .addField('Faydalı Komutlar :',[
      '`oyla` `random` `yaz`'
    ])
    .addField('Bilgi Komutları :',[
      '`avatar` `info` `insta` `istatistik` `ping` `sunucu` `yt` `twitch`'
    ])
    .addField('Eğlence Komutları :',[
      '`fuck` `kart` `meme` `sina` `napim` `şaka` `zar`'
    ])
    .addField('Metoli Büyüleri (∩^o^)⊃━☆゜.* :',[
      '`kutsa` `lanetle` `söndür` `yargıla`'
    ])
    .addField('Müzik Komutları :',[
      '`play` `dc`'
    ])
    message.channel.send(yardım)
  }
}
