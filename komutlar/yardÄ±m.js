const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(`Yardım Menüsü`, client.user.avatarURL())
.setThumbnail(`https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1%22)`)
.setDescription(`
<a:DiscordHype:843453061014749265> **Düzgün Çalışmam İçin Rol Sıralamasında Botun Rolünü En Üste Koymayı Unutmayın!**

<:onay:854440632512938017> Bir Hata Veya Bugmu Buldun?, **.canlıdestek** İle Bize Bildir`)
.addField(`**Yapımcı Komutları**`,`> <a:rengarenigne:854610475396104232> [.yapımcı](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Yetkili Komutlar**`,`> <a:rengarenigne:854610475396104232> [.yetkili](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Eğlence Komutları**`,`> <a:rengarenigne:854610475396104232> [.eğlence](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Sunucu Komutları**`,`> <a:rengarenigne:854610475396104232> [.sunucukur](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Kullanıcı Komutları**`,`> <a:rengarenigne:854610475396104232> [.kullanıcı](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.addField(`**Ayarlamalı Sistemler**`,`> <a:rengarenigne:854610475396104232> [.ayarlamalı](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)`,true)
.setFooter(`Yardım Menüsü ${message.author.tag} tarafından kullanıldı`)
message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','Yardım','YARDIM','HELP','Help'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: '',
  usage: ''
};