const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("testing ;-;", "https://www.twitch.tv/Alpha");
});
 
 
 
 //كود انشاء روم كتابي
client.on("message", (message) => {
let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "$ct") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
// كود انشاء روم صوتي
client.on("message", (message) => {
     let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "$cv") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('تم انشاء روم صوتى')
}
});
 
 
 
 
 
client.login('NzA1NDMwOTc3NzE5MzA0MjIz.XqrmMA.XShI7s7zs50bwiqkbo5zlFLbwKo');
