module.exports = async (client) =>{
    const guild = client.guilds.cache.get('798943477412397086');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('799290002314887199');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 600000);
}