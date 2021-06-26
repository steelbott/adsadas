const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
if(message.author.id !== "706954794891477063") return message.channel.send("<a:hata:846429181138305025> I Bu Komuta __Erişemezsiniz!__")
const embed = new Discord.MessageEmbed()
.setDescription('**Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.**')
.setFooter('30 saniye içinde evet yazmassanız iptal edilecek!')
.setColor('RED')
.setTimestamp()
message.channel.send(embed)
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("**<a:uyari:846435581806641212> Sistem Yeniden Başlatıldı! <a:tikgif:844907763527581736>**").then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] <a:uyari:846435581806641212> Sistem Yeniden Başlatıldı! <a:tikgif:844907763527581736>`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('Yeniden başlatma işlemi iptal edildi.');
    })});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reboot'],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};