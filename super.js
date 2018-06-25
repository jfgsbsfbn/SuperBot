const figlet = require('figlet');
const sql = require("sqlite");
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('-----------------')
  console.log('StarBot🌟 Is Online')
  console.log('-----------------')
});
client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
╭━━━╮╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━━┳╮╭┳━━┳━━┳━┫╰╯╰┳━┻╮╭╯
╰━━╮┃┃┃┃╭╮┃┃━┫╭┫╭━╮┃╭╮┃┃
┃╰━╯┃╰╯┃╰╯┃┃━┫┃┃╰━╯┃╰╯┃╰╮
╰━━━┻━━┫╭━┻━━┻╯╰━━━┻━━┻━╯
╱╱╱╱╱╱╱┃┃
╱╱╱╱╱╱╱╰╯

***__وصف عن البوت__***
**
....
متعدد الميزات و الاوامر فيه اوامر جميله يحتوي هذا البوت على

مرفوع ع خادم 24 ساعة
-:rocket: سرعه اتصال ممتازه
-:sunglasses: سهل الاستخدام 
-:warning: صيانه كل يوم
-:dollar: مجاني بل كامل
**
`)


message.author.sendEmbed(embed)

}
});
client.on("message", message => {
 if (message.content === "=help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
        ***__:globe_with_meridians: الأوامر العامه__***
**

**
        ***__🤖 اوامر البوت__***
**

**   
        ***__🛠 اوامر خصوصية للمبرمجين__***
**

**   
        
        ***__:radioactive: أوامر الأداره__***
**

**
       ***__🎮 العاب__***
**       

**
══════════ஜ۩۞۩ஜ════════════ 
الاضافة البوت:  https://discordapp.com/api/oauth2/authorize?client_id=460797863970996243&permissions=21469585838&scope=bot

رابط سيرفر السبورت:https://discord.gg/ZzFuNpB 
══════════ஜ۩۞۩ஜ════════════
`)


message.author.sendEmbed(embed)

}
});
client.on('message', message => {
if (message.content === '!help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**@؎Rando³².🇵🇸#6966 و @LEGEND_YT#4187  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
