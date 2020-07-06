const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot){
      return null;
  }
  if (msg.content === "老婆") {
    msg.reply("我不是你老婆");
  }
});

client.login(auth.token);