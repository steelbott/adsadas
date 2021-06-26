const Discord = require("discord.js");
exports.run = async(client, message, args) => {
  let enginar = "706954794891477063  "
  if(message.author.id !== enginar) return message.channel.send('<a:hata:846429181138305025> I Bu Komuta __Erişemezsiniz!__')
let engin = args[0]
if(!engin) return message.channel.send('Lütfen çıkmamı istediğiniz Sunucunun IDsini Girin.')
client.guilds.cache.get(engin).leave()
return message.channel.send('<a:uyari:846435581806641212> **Bot Sunucudan Ayrıldı!** <:onay:854440632512938017> ')
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayrıl"
};