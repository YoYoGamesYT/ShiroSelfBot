const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "<"
const prefix = "<"

bot.login("MzA4MzIyMjY3MzU0NjI4MDk3.XRkjxw.ZYhuHJDkTnEK_clxJn6eeHnLwiI");

bot.on("ready", function() {
    console.log("Pret !");
});

bot.on("ready", function() {
  bot.user.setGame("𝗦𝗵𝗶𝗿𝗼 𝗦𝗲𝗹𝗳𝗕𝗼𝘁 🐟", "https://www.twitch.tv/tfue");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${PREFIX}qihudgqysdfvjquyshb`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .addField("cette commande sert a rien","je suis d'accord avec toi")
    .setColor("00ffb2")
    .setFooter("By YoYo", message.author.avatarURL)
    .setTimestamp()

    return message.channel.send(serverembed);
  }
  
  if(cmd === `${PREFIX}infoserv`){
  
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Info du serveur:**")
    .setColor("00ffb2")
    .setThumbnail(sicon)
    .addField("Nom:", message.guild.name)
    .addField("Créer le:", message.guild.createdAt)
    .addField("Tu as rejoins le:", message.member.joinedAt)
    .addField("Membres totals:", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${PREFIX}credits`){

    let serverembed = new Discord.RichEmbed()
    .setTitle('🔎 __Créateur:__')
    .addField("**YoYo est le créateur de ce SelfBot, ses réseaux:**","👺 [YouTube](https://www.youtube.com/channel/UCHBnjPXWM5b3vJz4Onh_xMQ/featured) \n🐟 https://discord.gg/DekHCh9")
    .setColor("00ffb2")
    .setFooter("By YoYo", message.author.avatarURL)
    .setTimestamp()

    return message.channel.send(serverembed);
  }

  if(cmd === `${PREFIX}dogs`){
    random();
  
    if (randnum == 3){
        message.reply("https://aws-cf.imdoc.fr/prod/photos/3/5/5/8770355/23097025/big-23097025cfc.gif?v=12")
        console.log(randnum);
    }
  
    if (randnum == 1){
        message.reply("http://68.media.tumblr.com/f84971e77864eab3bbc9333bf1cc793f/tumblr_orq7o64nx91vkfsowo1_400.gif")
        console.log(randnum);
    }
  
    if (randnum == 2){
        message.reply("https://data.photofunky.net/output/image/d/f/1/6/df1609/photofunky.gif");
        console.log(randnum);
    }

    if (randnum == 4){
      message.reply("https://media.giphy.com/media/ztFjABgMMdgQg/giphy.gif");
      console.log(randnum);
    }

    if (randnum == 5){
      message.reply("http://www.musher-experience.com/wp-content/uploads/2013/03/gif-husky-puppy.gif");
      console.log(randnum);
    }
  
  }

  function random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
    }

  if(cmd === `${PREFIX}cats`){
    random();
  
    if (randnum == 3){
        message.reply("http://42.img.v4.skyrock.net/6162/33476162/pics/3134985428_1_2_jgstFC18.gif")
        console.log(randnum);
    }
  
    if (randnum == 1){
        message.reply("http://gifdrole.com/les_gifs_animes_des_chatons_les_plus_droles_et_mignons_du_monde/Chaton_amusant.gif")
        console.log(randnum);
    }
  
    if (randnum == 2){
        message.reply("https://thumbs.gfycat.com/EssentialViciousAmurminnow-max-1mb.gif");
        console.log(randnum);
    }

    if (randnum == 4){
      message.reply("https://media.giphy.com/media/9y0qXExCElAgU/giphy.gif");
      console.log(randnum);
   }

    if (randnum == 5){
      message.reply("https://media0.giphy.com/media/gl8ymnpv4Sqha/giphy.gif");
      console.log(randnum);
}
  
  }

  if(cmd === `${PREFIX}ping`){

    let serverembed = new Discord.RichEmbed()
    .setColor("00ffb2")
    .addField(":ping_pong: Pong",":|")
    .setTimestamp()
    .setFooter("By YoYo", message.author.avatarURL)

    return message.channel.send(serverembed);
  }
}
)
