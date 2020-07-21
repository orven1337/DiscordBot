//#region Discord.js套件
const Discord = require('discord.js');
//不變的使用者
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

client.on('message', (msg) => {
  if (msg.content === '抽卡') {
    let str = '';
    for (i = 0; i <= 9; i++) {
      let a = Math.floor(Math.random() * 100 + 1); // 1~100數字
      if (a <= 87) {
        if (a >= 0) {
          //msg.channel.send('抽到銀卡')
          str = str + '<:cardback_1:735036774409175130>'
        }
      }

      if (a <= 97) {
        if (a > 87) {
          //msg.channel.send('抽到金卡')
          str = str + '<:cardback_2:735036774128156713>'
        }
      }

      if (a > 97) {
        if (a <= 100) {
          //msg.channel.send('抽到虹卡')
          str = str + '<:cardback_3:735036774144802857>'
        }
      }
      if (i == 4) {
        str = str + '\n';
      }
    }
    msg.channel.send(str);
  }
});

client.on('message', (msg) => {
  if (msg.content === '單抽') {
    let str = '';
    for (i = 0; i <= 0; i++)  {
      let a = Math.floor(Math.random() * 100 + 1); // 1~100數字
      if (a <= 87) {
        if (a >= 0) {
          //msg.channel.send('抽到銀卡')
          str =  str +'<:cardback_1:735036774409175130>'
        }
      }

      if (a <= 97) {
        if (a > 87) {
          //msg.channel.send('抽到金卡')
          str =  str +'<:cardback_2:735036774128156713>'
        }
      }

      if (a > 97) {
        if (a <= 100) {
          //msg.channel.send('抽到虹卡')
          str =  str +'<:cardback_3:735036774144802857>'
        }
      }

    }
    msg.channel.send(str);
  }
});
let timeMessageSend = false;
//動作A
client.on('ready', () => {
  console.log('start')
  //整點報時
  setInterval(() => DoForTime(), "1000");
});
//整點報時
function DoForTime() {
  let nowMinute = new Date().getMinutes();

  //是整點
  if (nowMinute.toString() == 0) {
    if (timeMessageSend) {
      return true;
    }
    else {
      let nowDate = new Date().getHours();
      client.channels.cache.get('725288853249720402').send('當前時間為 ' + nowDate.toString() + ' 點整!');
      timeMessageSend = true;
    }
  }
  else {
    timeMessageSend = false;
  }
}


client.login(auth.token);