const { Channel } = require("discord.js")

module.exports = {
    kod:'ali',
    async run (client, message, args) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bunu yapamazsın! ❌')
        message.channel.send('<@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990> <@780210505884499990>')
    }
}
