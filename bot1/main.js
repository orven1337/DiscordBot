//10抽
//#region Discord.js套件
const Discord = require('discord.js');
//不變的使用者
const client = new Discord.Client();

client.login('token');

client.on('ready', () => {
  console.log('start')
});

client.on('message', (msg) => {
  if (msg.content === '抽卡') {
    let str = '';
    for (i = 0; i <= 9; i++) {
      let a = Math.floor(Math.random() * 100 + 1); // 1~100數字
      if (a <= 87) {
        if (a >= 0) {
          //msg.channel.send('抽到銀卡')
          str = str + '<:test1:732909055785435276>'
        }
      }

      if (a <= 97) {
        if (a > 87) {
          //msg.channel.send('抽到金卡')
          str = str + '<:test2:732909089000128553>'
        }
      }

      if (a > 97) {
        if (a <= 100) {
          //msg.channel.send('抽到虹卡')
          str = str + '<:test3:732909113989660683>'
        }
      }
      if (i == 4) {
        str = str + '\n';
      }
    }
    msg.channel.send(str);
  }
});