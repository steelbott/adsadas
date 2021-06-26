const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
   let cagir = args.slice(0).join(' ');
   
  if (!cagir) return message.reply('Destek Ekibini Çağırmam İçin Bir Sebep Gir!')
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send("**Mesajınız Destek Ekibine İletilmiştir!, En Kısa Sürede Bulunduğunuz Sunucuya Geliceklerdir.** <a:yesiltik:845016883321503804>")
    let botclubcuk = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
    .setTitle('Biri Seni Çağırıyor KOS OLM KOS')
    .addField('Sebep:', `${cagir}`)
    .addField(`Davet Linki:`, `${invite}`)
    .setThumbnail(message.guild.iconURL())
    client.users.cache.get(ayarlar.sahip).send(botclubcuk);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcıyı-çağır"],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
};