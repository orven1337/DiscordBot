const Discord = require('discord.js');
const client = new Discord.Client();

const request = require('request');
const token = require('./token.json');


const options = {
  'method': 'GET',
  'url': token.GetTestAPI,
  'headers': {
  }
};

var APIValue = new Array;

client.on('ready', () => {

  test(function(data){
    try{
      if(data !== undefined){
        console.log('data',data)
        APIValue = data;
        console.log('APIValue: ',APIValue);
        console.log(APIValue[0]);
      }
    }
    catch{
        console.log('error#1');
    }
  })

  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }  
//   if (msg.content === 'test'){
//       test();
//   }
});

// API調用測試
function test (callback){
    
request(options, function (error, response) {
  if (error) throw new Error(error);
  callback(response.body);
});
}

client.login(token.token);