const moment = require('moment')
require('moment-duration-format')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "sunucu",
    async run (client, message, args) {
        var guild = message.guild
        var kurulus = guild.createdTimestamp
        var kanallar = guild.channels.cache
        var üyeler = guild.members.cache
        var emote = guild.emojis.cache
        var roller = guild.roles.cache
        var embed = new MessageEmbed()
        .setTitle(`${guild.name} Sunucusu`)
        .setColor("RED")
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField('**Sunucu Bilgileri :**', [
            `**Kurucu** : <@${guild.owner.id}>`,
           `**Sunucu Adı** : ${guild.name}`,
           `**Sunucu Kuruluş Tarihi** : ${moment(kurulus).format('DD')}/${moment(kurulus).format('MM')}/${moment(kurulus).format('YYYY HH:mm:ss')}`       
        ],)
        .addField('\u200b', '\u200b')
        .addField('**İstatistikler :**', [
            `**Rol Sayısı** : ${roller.filter(rol => rol.name !== '@everyone').size}`,
            `**Emoji Sayısı** : ${emote.size}`,
            `**Kanal Sayısı** : ${kanallar.size}`,
            `**Kategori Sayısı** : ${kanallar.filter(kanal => kanal.type === 'category').size}`,
            `**Ses Kanalı Sayısı** : ${kanallar.filter(kanal => kanal.type === 'voice').size}`,
            `**Metin Kanalı Sayısı** : ${kanallar.filter(kanal => kanal.type === 'text').size}`
        ], true)
        .addField('\u200b', '\u200b', true)
        .addField('**Kullanıcı Durumları :**', [
            `**Üye Sayısı** : ${üyeler.filter(üye => !üye.user.bot).size}`, 
            `**Bot Sayısı** : ${üyeler.filter(üye => üye.user.bot).size}`,
            `**Çevrimiçi** : ${üyeler.filter(üye => üye.presence.status === 'online').size}`,
            `**Boşta** : ${üyeler.filter(üye => üye.presence.status === 'idle').size}`,
            `**Rahatsız Etmeyin** : ${üyeler.filter(üye => üye.presence.status === 'dnd').size}`,
            `**Çevrimdışı** : ${üyeler.filter(üye => üye.presence.status === 'offline').size}`
        ], true)
        .setTimestamp()
        .setFooter(`${client.user.tag}`, `${client.user.displayAvatarURL()}`)
        message.channel.send(embed)
    }
}