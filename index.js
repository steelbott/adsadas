const Discord = require("discord.js");
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client();
const jimp = require("jimp");
const db = require("quick.db");
const ayarlar = require("./ayarlar.json");//sharpen creative
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {//sharpen creative
  console.log(`7/24 Hizmet Vermekteyim!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//-------------------- 7/24 Uptime --------------------////sharpen creative
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
const ms = require("quick.db");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {


  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("#009eff")
      .setDescription(`\`${message.author.username}\` Geri geldi! Artık AFK Değil!`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("#009eff")
      .setDescription(
        `\`${USER.tag}\` Şuanda \`${REASON}\` Sebebinden AFK!`
      );

    message.channel.send(afk);
  }
});

client.on("guildMemberAdd", async (member, message) => {
  let rol = db.fetch(`otorol_${member.guild.id}`);
  let kanal = db.fetch(`otorollog_${member.guild.id}`);

  if (!rol) return;
  if (member.user.bot) {}
  member.roles.add(rol);
  const mesaj = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(
      `${member} Adlı Kullanıcıya  <@&${rol}> Verdim`
    );
  client.channels.cache.get(kanal).send(mesaj);
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {//sharpen creative
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.on("guildMemberAdd", async (member, message) => {
  let rol = db.fetch(`otorol_${member.guild.id}`);
  let kanal = db.fetch(`otorollog_${member.guild.id}`);

  if (!rol) return;
  if (member.user.bot) {}
  member.roles.add(rol);
  const mesaj = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(
      `<a:ates:854021958094422026> ${member} Adlı Kullanıcı Sunucuya Giriş Yaptı!, Ve <@&${rol}> Adlı Rol Başarı İle Verildi! <a:siyahtik:842853732957814805>`
    );
  client.channels.cache.get(kanal).send(mesaj);
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);//sharpen creative
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);//lrowsxrd
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();//sharpen creative
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;//sharpen creative
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);//sharpen creative

////////////////////////////////////////////Reklam Engel////////////////////////////////////////////
client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Sistemi Aktif Ve Bu Yüzden BAĞLANTI/GİF Gibi Bağlantılar Yasak!**').then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                        //sharpen  
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });
//////////////////////Sa-as//////////////////////

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Hoşgeldin');      
      } 
      }
    });
//////////////////////Sa-as//////////////////////