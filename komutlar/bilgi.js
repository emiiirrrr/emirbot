const moment = require('moment')
require('moment-duration-format')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "kullanıcı",
    aliases: ['user', 'info'],
    async run (client, message, args) {
        let giris = message.mentions.members.first()
        let üye = message.mentions.users.first()
        if (üye) {
            let durum = üye.presence.status
            .replace('online', 'Çevrimiçi')
            .replace('idle', 'Boşta')
            .replace('dnd', 'Rahatsız Etmeyin')
            .replace('offline', 'Çevrimdışı')
            const embed = new MessageEmbed()
            .setThumbnail(üye.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setDescription(`<@${üye.id}>` + `\n**Kullanıcı Adı** : ${üye.username}\n**Etiket** : #${üye.discriminator}\n**Son Mesaj** : ${üye.lastMessage}\n**Kullanıcı Bot mu?** : ${üye.bot ? 'Evet' : 'Hayır'}\n**Üye Durumu** : ${durum}\n\n**Hesap Oluşturma Tarihi** : ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\n**Sunucuya Giriş Tarihi** : ${moment(giris.joinedAt).format('DD')}/${moment(giris.joinedAt).format('MM')}/${moment(giris.joinedAt).format('YYYY HH:mm:ss')}\n\n**Roller** : ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}`)
            .setTimestamp()
            .setFooter(`ID: ${üye.id}`)
            .setAuthor(üye.tag, `${üye.displayAvatarURL({ dynamic: true })}`)
            message.channel.send(embed)
        } else {
            giris = message.member
            üye = message.author
            let durum = üye.presence.status
            .replace('online', 'Çevrimiçi')
            .replace('idle', 'Boşta')
            .replace('dnd', 'Rahatsız Etmeyin')
            .replace('offline', 'Çevrimdışı')
            const embed = new MessageEmbed()
            .setThumbnail(üye.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setDescription(`<@${üye.id}>` + `\n**Kullanıcı Adı** : ${üye.username}\n**Etiket** : #${üye.discriminator}\n**Son Mesaj** : ${üye.lastMessage}\n**Kullanıcı Bot mu?** : ${üye.bot ? 'Evet' : 'Hayır'}\n**Üye Durumu** : ${durum}\n\n**Hesap Oluşturma Tarihi** : ${moment(üye.createdAt).format('DD')}/${moment(üye.createdAt).format('MM')}/${moment(üye.createdAt).format('YYYY HH:mm:ss')}\n**Sunucuya Giriş Tarihi** : ${moment(giris.joinedAt).format('DD')}/${moment(giris.joinedAt).format('MM')}/${moment(giris.joinedAt).format('YYYY HH:mm:ss')}\n\n**Roller** : ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}`)
            .setTimestamp()
            .setFooter(`ID: ${üye.id}`)
            .setAuthor(message.author.tag, `${message.author.displayAvatarURL({ dynamic: true })}`)
            message.channel.send(embed)
        }
    }
}