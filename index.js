import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMzE5MjA1MTc5NDgy.X3tJMw.YK7IAiERB9NE28QDdhlvt_ay3bY';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.login(TOKEN_API);