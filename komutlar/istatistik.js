const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("")
    .setFooter("Steel", bot.user.avatarURL)
    .addField("» <a:developer:848968027483799562>  Botun Sahibi  <a:developer:848968027483799562>", "<@706954794891477063>")
    .addField("» <a:taslar:855150972485238804>  Destek Ekibi </>", "<@817297742845706260>")
    .addField(
      ":desktop:  Bellek kullanımı:",
      (process.memoryUsage().heapUsed / 8048 / 2048).toFixed(2)
    )
    .addField("» Çalışma süresi", seksizaman)
    .addField(
      "» Kullanıcılar",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField(
      "» :clipboard: Sunucular",
      bot.guilds.cache.size.toLocaleString(),
      true
    )
    .addField("» Kanallar", bot.channels.cache.size.toLocaleString(), true)
    .addField("» Ping", bot.ws.ping + " ms", true)
    .addField(
      "**❯ Bot Davet**",
      " [Davet Et](https://discord.com/oauth2/authorize?client_id=852948930312667157&scope=bot&permissions=8)"
    )
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "bilgi"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot istatistik",
  usage: "istatistik"
};