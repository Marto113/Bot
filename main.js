const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();
const memberCounter = require('./counters/member-counter');


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('jekata e pedal');
    memberCounter(client)
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('798943921879253031').send(`Добре дошъл в сървъра, <@${guildMember.user.id}>, преди да продължиш напред, моля прочети правилата!`);

});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } if(command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } if(command === 'twitch') {
        client.commands.get('twitch').execute(message, args);
    } if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
});


client.login('Nzk5MjE4MzU2Mzg4NjI2NDgz.YAAYGA.b1ZOmS7sOBpnTiOB6_UIJhPfpBg');