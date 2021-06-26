const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let reynsesli = 0;
    for (const [id, voiceChannel] of voiceChannels) reynsesli += voiceChannel.members.size;
      const reyntepki = client.emojis.cache.find(emoji => emoji.id === "<a:tikgif:844907763527581736>")
  const reyn = new Discord.MessageEmbed()
  .setColor("BLACK")
        .setDescription(`\`•\`Seste toplam **${reynsesli}** kullanıcı var. \n \`•\`Sunucumuzda toplam **${message.guild.memberCount}** üye var. \n \`•\`Sunucumuza **${message.guild.premiumSubscriptionCount}** takviye yapılmış. \n \`•\`Sunucumuzda toplam **${message.guild.members.cache.filter(m => m.presence.status !== "offline").size}** çevrimiçi üye var.`)
 .setFooter("Steel")
  message.channel.send(reyn)
  message.react(reyntepki)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};
exports.help = {
  name: 'say',
  description: 'Sunucu bilgilerinizi gösterir.',
  usage: 'say'
};