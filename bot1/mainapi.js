//#region Discord.js套件
const Discord = require('discord.js');
const { exit } = require('process');
//不變的使用者
const client = new Discord.Client();

let timeMessageSend = false;

client.login('token');

//動作A
client.on('ready', () => {
  console.log('start')
  //整點報時
  setInterval(() => DoForTime(), "1000");
});

client.on('message', (msg) => {

  switch (msg.content) {
    case '抽卡':
      msg.channel.send(DoRandomMessage());
      break;

  }

});

//抽卡方法
function DoRandomMessage() {
  let str = ''; //訊息變數
  let ran; //隨機數
  for (i = 0; i <= 9; i++) {
    ran = Math.floor(Math.random() * 100 + 1); // 1~100數字
    if (ran <= 87 && ran >= 0) {
      str = str + '<:test1:732909055785435276>';
    }
    if (ran <= 97 && ran > 87) {
      str = str + '<:test2:732909089000128553>';
    }
    if (ran > 97 && ran <= 100) {
      str = str + '<:test3:732909113989660683>';
    }
    if (i == 4) {
      str = str + '\n';
    }
    return str;
  }
}

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
