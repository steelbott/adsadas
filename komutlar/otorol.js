const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (args[0] === 'sıfırla') {
let otorol = db.fetch(`otorol_${message.guild.id}`)
if (!otorol) return message.channel.send(`<a:hata:846429181138305025> I Otorol Ayarlanmadığı İçin Sıfırlanamaz!`)
   if(!db.has(`otorol_${message.guild.id}`)) return message.channel.send(`:reds:Sistem zaten kapalı.`)
message.channel.send(`Otorol Sistemi Başarıyla Sıfırlandı! <a:siruxonay:845405358226800661>`)
  db.delete(`otorollog_${message.guild.id}`)
  db.delete(`otorol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(db.has(`otorol_${message.guild.id}`)) return message.channel.send(`<a:hata:846429181138305025> Sistem zaten açık.`)
if(!rol) return message.channel.send(`<a:no:845350575470411786> I Lütfen Sunucuya Gelen Üyelere Vermek İstediğiniz Rolü Seçin!
**Örnek Kullanım: .otorol @Üye #gelen-giden**`)

let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send(`<a:no:845350575470411786> I Otorol Kanalını Ayarlaryın!
**Örnek Kullanım: .otorol @Üye #gelen-giden**`)

db.set(`otorol_${message.guild.id}`, rol.id)
db.set(`otorollog_${message.guild.id}`, kanal.id)

message.channel.send(`Otorol Başarıyla Ayarlandı! <:onay:854440632512938017>
Otorol Sistemini Kapatmak İçin **.otorol sıfırla** Yazın.`)  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['oto-rol'],
  permlevel: 0
}
exports.help = {
  name: 'otorol'
} //:dikkat:   //:tik: