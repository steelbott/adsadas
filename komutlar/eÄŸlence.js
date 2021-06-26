const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Steel | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

» .tokat : Belirttiğiniz Kullanıcıya Tokat Atarsınız
» .beşlik : Belirttiğiniz Kullanıcı İle Beşlik Atarsınız
» .düello : Belirttiğiniz Kullanıcı İle Düello Yaparsınız
» .kelime-yarışması : Belirttiğiniz Kullanıcı İle Yarışma Yaparsınız
» .sor : Bota Soru Sorarsınız
» .öp : Belirttiğiniz Kullanıcıyı Öpersiniz
» .aduketçek : Belirttiğiniz Kullanıcıya aduket Çekersiniz
» .aşkölç : Belirttiğiniz Kullanıcı İle Aşk Oranınızı Ölçersiniz
» .aykutelmas : Aykut Elmas İle Konuşursunuz

`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) **|** [WebSitesi](http://ab.arrow-bot.tk/) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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
    name: 'eğlence', 
    description: 'eğlence menüsü',
    usage: 'eğlence'
  };