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

» .sor : Bota Soru Sorarsınız
» .istatistik : Botun Verilerini Öğrenirsiniz
» .eğlence : Eğlence Komutlarını Gösterirsiniz
» .afk : Afk Moduna Girersiniz
» .ping : Botun Pingini Öğrenirsiniz
» .yetkilerim : Komutu Kullandığınız Sunucudaki Yetkilerinizi Öğrenirsiniz
» .git: Etiketlediğiniz Kullanıcının Ses Kanalına Gidersiniz
» .çek : Etiketlediğiniz Kullanıcıyı Bulunduğunuz Ses Kanalına Çekersiniz
» .avatar : Sizin Ve Etiketlediğiniz Kullanıcının Avatarına Bakarsınız
`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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
    name: 'kullanıcı', 
    description: 'yardım menüsü',
    usage: 'kullanıcı'
  };