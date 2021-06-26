const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Steel | Yetkili Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

» .yavaş-mod: Slow Mod'u Aktifleştirirsiniz
» .ban : Belirttiğiniz Kullanıcıyı Sunucudan __Yasaklarsınız__
» .unban : Her Hangi Bir Kullanıcının Yasağını Kaldırırsınız
» .sil : Belirttiğinz Sayı Kadar Mesaj Silersiniz
» .sa-as : Sa-As Özelliğini Aktifleştirirsiniz
» .kick : Belirttiğinz Kullanıcıyı Atarsınız
» .nuke : Komutu Kullandığınız Kanala NUKE Atarsınız.
» .bansorgula: ID'sini Girdiğiniz Kullanıcının Yasağı Hakkında Bilgi Alırsınız
» .say : Sunucu Verilerini Öğrenirsiniz
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false,   
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yetkili', 
    description: 'yardım menüsü',
    usage: 'yetkili'
  };