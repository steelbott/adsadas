const Discord = require('discord.js');
const { delay, randomRange, verify } = require('../util/Util.js');
const words = ['çikolata', 'aggsy', 'odun', 'bomba', 'süt', 'şimşek', 'yıldırım', 'bot', 'steel', 'owo', 'araba', 'düello', 'mizah', 'biber', 'discord', 'patlat', 'savaş', 'kelime', 'yok et', 'bilmem', 'öldür', 'sonsuzluk', 'gerçek', "egehanss"];

exports.run = async (client, msg, args) => {
  
  this.fighting = new Set();
  
  let opponent = msg.mentions.users.first()
	if (!opponent) return msg.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return msg.reply('<a:no:845350575470411786> I Botlar ile oynayamazsın!');
		if (opponent.id === msg.author.id) return msg.reply('<a:no:845350575470411786> I Kendin ile kapışamassın!');
		if (this.fighting.has(msg.channel.id)) return msg.reply('<a:uyari:846435581806641212> I Kanal başına sadece bir meydan okuma gelebilir!');
		this.fighting.add(msg.channel.id);
		try {
			await msg.channel.send(`${opponent} Bu Meydan Okumayı Kabul Ediyor Musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.) `);
			const verification = await verify(msg.channel, opponent);
			if (!verification) {
				this.fighting.delete(msg.channel.id);
				return msg.reply('Meydan okuman reddedildi... <a:hata:846429181138305025> ');
			}
			await msg.channel.send('Hazırlanın kelime geliyor...')
			const word = words[Math.floor(Math.random() * words.length)];
			await msg.channel.send(`ŞİMDİ \`${word.toUpperCase()}\` YAZ!`);
			await msg.channel.send(`_Kelimeyi tamamen küçük harfle yazınız._`);
			const filter = res => [opponent.id, msg.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
			const winner = await msg.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			});
			this.fighting.delete(msg.channel.id);
			if (!winner.size) return msg.channel.send('<a:uyari:846435581806641212> Yarışma berabere bitti! <a:uyari:846435581806641212>');
			return msg.channel.send(`<a:DiscordHype:843453061014749265> Tebrikler ${winner.first().author} Kazandın! <a:DiscordHype:843453061014749265> `);
		} catch (err) {
			this.fighting.delete(msg.channel.id);
			throw err;
		}
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-yarışı', 'ilk-yazan-kazanır','kelime-yarışması'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'kelime-yarışı',
  category: "kelime-yarışı",
  description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
  usage: 'düello[@kullanıcı]'
};