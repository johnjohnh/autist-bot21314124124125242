const { Client  , Attachment} = require('discord.js');
const bot = new Client();

const token ='NTk0MTMxNTk1MTU0MTYxNjg0.XRX-Rg.h8N9GB2jlgEyGGa0yPxB_2uuS9U';

const prefix ='.';
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1}
var name = 'one of the bois :DDDDDDD'
bot.on('ready', ()=>{
    console.log('yo this shit ready');
})


bot.on('message', msg =>{
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'fuck':
            msg.channel.sendMessage('can @everyone stop ? plsssss');
            break;
        case 'clear':
            msg.channel.bulkDelete(1);
            msg.channel.bulkDelete(args[1]);
            break;    
        case 'link':
            msg.channel.bulkDelete(1);
            msg.channel.sendMessage("hi here's a link \nhttps://discord.gg/ccUeGy8\nits for this very server\nnice ain't it?\nalso here is some more autism is you want it\nhttps://discord.gg/DpaQJBa \nhttps://discord.gg/kEEvHQR\nk ty")
    }
})

bot.login(token);
