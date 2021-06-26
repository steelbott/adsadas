const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('#009eff')
  .setDescription(`<a:no:845350575470411786> Afk Olmak İçin Bir Sebep Belirtin!`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('#009eff')
  .setDescription(`<:onay:854440632512938017> **Artık Biri Seni Etiketleyince \`${REASON}\` Sebebinden AFK Diyeceğim!**`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};