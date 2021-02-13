const Discord = require('discord.js')
require("events").EventEmitter.defaultMaxListeners = 30000;
require("events").defaultMaxListeners = 30000;
const client = new Discord.Client()
const { readdirSync } = require('fs'); 
const { join } = require('path'); 
const { Client, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require("./config.json")

client.commands= new Discord.Collection();

client.prefix = PREFIX

const cmd = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); 
for (const file of cmd) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
    
}

client.on("error", console.error);

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.startsWith(PREFIX)) {
      const args = message.content.slice(PREFIX.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command = client.commands.get(commandName)
           || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

      if (!command) return message.channel.send(`Komut dosyamda **${commandName}** adlı bir komut bulamadım.`);
      
      if (!commandName) return;


      try {
          command.run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
});

client.on('ready', () => {
  console.log(`Canım yavrum ${client.user.tag} şu an da açık.`)
  const durumlar = [
    "Yardım için -> e?yardım",
    "emiiirrr#0001",
    `${client.guilds.cache.size} Sunucu`
  ]
  setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000)
  client.user.setStatus('online')
});

//BURADAN BAŞLAR

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adem out') {
    msg.delete(msg.author)
    const adem = new MessageEmbed()
    .setTitle('***Uçabildiğin kadar uç...***')
    .setAuthor('Adem Out')
    .setColor("RANDOM")
    .setImage('https://media.giphy.com/media/HpegoSJeLAMkyilldk/giphy.gif');
    msg.channel.send(adem);
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'adem in') {
    message.delete(message.author)
    const adem1 = new MessageEmbed()
    .setAuthor('Adem In')
    .setColor("BLUE")
    .setImage('https://media.giphy.com/media/3cFxVa3KF0NLJHlVMQ/giphy.gif')
    message.channel.send(adem1)
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kaaninho out') {
    msg.delete(msg.author)
    const kaan = new MessageEmbed()
    .setTitle('***Bravo six going dark...***')
    .setAuthor('Kaaninho Out')
    .setColor("BLACK")
    .setImage('https://media.giphy.com/media/jQGE7t0qcFYzr3EHsF/giphy.gif');
    msg.channel.send(kaan)
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'kaaninho in') {
    message.delete(message.author)
    const kaan1 = new MessageEmbed()
    .setAuthor('Kaan In')
    .setColor("GREY")
    .setImage('https://media.giphy.com/media/OLztTgaKKvcCVarFxR/giphy.gif')
    message.channel.send(kaan1)
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ali out') {
    msg.delete(msg.author)
    const ali = new MessageEmbed()
    .setAuthor('Ali Out')
    .setColor("PINK")
    .setImage('https://media.giphy.com/media/bHCNR7A5KOepkVRdCV/giphy.gif');
    msg.channel.send(ali)
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'elif out') {
    message.delete(message.author)
    const elif = new MessageEmbed()
    .setTitle('I love you 3000')
    .setAuthor('Elif Out')
    .setColor("RED")
    .setImage('https://media1.tenor.com/images/300209b23f0e0470931912cdaf6924de/tenor.gif')
    message.channel.send(elif)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'şevval out') {
    message.delete(message.author)
    const şevval = new MessageEmbed()
    .setAuthor(`Şevval Out`)
    .setColor("RED")
    .setImage('https://media.giphy.com/media/rijUE5HcW2mcsBzPZ8/giphy.gif')
    message.channel.send(şevval)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'emine out') {
    message.delete(message.author)
    const emine = new MessageEmbed()
    .setAuthor('Söylemediniz ')
    .setColor("RED")
    .setImage('https://blog.hubspot.com/hubfs/Shrug-Emoji.jpg')
    message.channel.send(emine)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'ömer out') {
    message.delete(message.author)
    const ömer = new MessageEmbed()
    .setAuthor('Ömer Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/RAkUIXjaKnTfz4cd5F/giphy.gif')
    message.channel.send(ömer)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'yogurt out') {
    message.delete(message.author)
    const elifnaz = new MessageEmbed()
    .setTitle('kraliçeniz oflayn')
    .setAuthor('Yogurt Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/s7cP0gvnf4uy1RwCLg/giphy.gif')
    message.channel.send(elifnaz)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'yogurt in') {
    message.delete(message.author)
    const elifnaz1 = new MessageEmbed()
    .setTitle('kraliçeniz onlayn')
    .setAuthor('Yogurt In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/PN0QIlE3sg6lhYCa9A/giphy.gif')
    message.channel.send(elifnaz1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'tuna out') {
    message.delete(message.author)
    const tuna = new MessageEmbed()
    .setTitle('Behlül kaçar')
    .setAuthor('Tuna Out')
    .setColor("RED")
    .setImage('https://i.ibb.co/ZczBH2v/images-3.jpg')
    message.channel.send(tuna)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'nes out') {
    message.delete(message.author)
    const nes = new MessageEmbed()
    .setAuthor('Enes Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/V4efeXVTdKExy/giphy.gif')
    message.channel.send(nes)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'umut out') {
    message.delete(message.author)
    const umut = new MessageEmbed()
    .setAuthor('Umut Out')
    .setColor("RED")
    .setImage('https://media1.tenor.com/images/7469faf3da2986a065c9edfe09d61a08/tenor.gif')
    message.channel.send(umut)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'kerem out') {
    message.delete(message.author)
    const kerem = new MessageEmbed()
    .setAuthor('Kerem Out')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/xxOHdXhDsucXkozWy3/giphy.gif')
    message.channel.send(kerem)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'özge out') {
    message.delete(message.author)
    const özge = new MessageEmbed()
    .setAuthor('Özge Out')
    .setColor("RED")
    .setImage('https://media1.tenor.com/images/c0f1ed5b9866719dabcb9f8b0abafd44/tenor.gif')
    message.channel.send(özge)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'kerem in') {
    message.delete(message.author)
    const kerem1 = new MessageEmbed()
    .setAuthor('Kerem In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/JLkiUkTrMscIQPCke9/giphy.gif')
    message.channel.send(kerem1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'şevval in') {
    message.delete(message.author)
    const şevval1 = new MessageEmbed()
    .setAuthor('Şevval In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/gxEq4rcxhqtgkGnFWp/giphy.gif')
    message.channel.send(şevval1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'elif in') {
    message.delete(message.author)
    const elif1 = new MessageEmbed()
    .setAuthor('Elif In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/iD5uDpic4TfK9qtkhd/giphy.gif')
    message.channel.send(elif1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'ömer in') {
    message.delete(message.author)
    const ömer1 = new MessageEmbed()
    .setAuthor('Ömer In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/TLdlwDaYY16EKl7GRs/giphy.gif')
    message.channel.send(ömer1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'enes in') {
    message.delete(message.author)
    const enes1 = new MessageEmbed()
    .setAuthor('Enes In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/sMFh8lKgGlvNjpT98Y/giphy.gif')
    message.channel.send(enes1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'ali in') {
    message.delete(message.author)
    const ali1 = new MessageEmbed()
    .setAuthor('Ali In')
    .setColor("RED")
    .setImage('https://i.hizliresim.com/kTf5Ub.png')
    message.channel.send(ali1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'umut in') {
    message.delete(message.author)
    const umut1 = new MessageEmbed()
    .setAuthor('Umut In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/vfcndp0tkHImhwI0wn/giphy.gif')
    message.channel.send(umut1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'özge in') {
    message.delete(message.author)
    const özge1 = new MessageEmbed()
    .setAuthor('Özge In')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/OvLVmnemhHp7Kr5gn8/giphy.gif')
    message.channel.send(özge1)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 's is for') {
    const şevval2 = new MessageEmbed()
    .setAuthor('SPITFIREE!!!')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/XLyMIKi8Tz4WWbVzXy/giphy.gif')
    message.channel.send(şevval2)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'simp') {
    const şevval2 = new MessageEmbed()
    .setAuthor('Sniper Monkey...')
    .setColor("RED")
    .setImage('https://media.giphy.com/media/3zaydae5dxv2NhlRNH/giphy.gif')
    message.channel.send(şevval2)
  }
})

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'elissa in') {
    const elissa = new MessageEmbed()
    .setColor("ORANGE")
    .setImage('https://media.giphy.com/media/C5fMCaTbiXJxGZCfWp/giphy.gif')
    message.channel.send(elissa)
  }
})

client.login(TOKEN)
