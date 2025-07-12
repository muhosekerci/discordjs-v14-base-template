const data = {
    name: 'ping',
    description: "Learn the bot's response time with the ping command!"
};

const execute = function(client, interaction) {

    interaction.reply(`🏓 Pong! ${Math.round(client.ws.ping)}ms`);
    
};

export { data, execute };
