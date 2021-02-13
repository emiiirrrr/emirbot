const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "napim",
  async run (client, message, args) {
    var Napimler = [
      'https://media1.tenor.com/images/1c5b522290e5976dd02af684ab442329/tenor.gif',
      'https://media1.tenor.com/images/8f0ebc4a52e45b97e87f3f0f4b20e039/tenor.gif',
      'https://media1.tenor.com/images/ed1a8745aad9145d246acb7c5b25bb7e/tenor.gif',
      'https://media1.tenor.com/images/a08ca89b2a72f69b2b2d2030f8d23148/tenor.gif',
      'https://media1.tenor.com/images/a2610851f11fce570c93351cfacaeb51/tenor.gif'
    ];
    var napim = Math.floor(Math.random()*Napimler.length)
    const napm = new MessageEmbed()
    .setImage(`${Napimler[napim]}`);
    message.channel.send(napm)
  }
}
