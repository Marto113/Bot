module.exports = {
    name: 'clear',
    description: 'clear chat',
    async execute(message, args){
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}