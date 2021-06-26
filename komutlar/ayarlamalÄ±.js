const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Ayarlamalı Sistem Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

» .otorol : Oto Rol Sistemini Kurarsınız.
» .reklam-engelle : Reklam Engel Sistemini Açarsınız
» .sa-as : Sa-as Sistemini Açarsınız
» .yavaş-mod : Slow Modu Aktifleştirirsiniz
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=728920362636542032&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false,   
    aliases: ["user"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'ayarlamalı', 
    description: 'yardım menüsü',
    usage: 'kullanıcı'
  };