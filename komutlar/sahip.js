const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("")
.setAuthor(`Yapımcı Menüsü`, client.user.avatarURL())
.setThumbnail(`https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1%22)`)
.setDescription(`

Bot Sahibine Özel Komutlar!`)
.addField(`**Botu Yeniden Başlatırsınız**`,`> <a:developer:848968027483799562> [.reboot <a:developer:848968027483799562>](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Botu Sunucudan Atarsınız**`,`> <a:developer:848968027483799562> [.ayrıl <a:developer:848968027483799562>](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['SAHİP YARDIM','Sahip Yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: '',
  usage: ''
};