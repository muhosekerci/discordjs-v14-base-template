const event = 'interactionCreate';

const execute = async function(client, interaction) {

    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return interaction.reply({ content: 'Command not found!', ephemeral: true });

    try {
        await command.execute(client, interaction);
    } catch(error) {
        console.error(error);
        await interaction.reply({ content: 'An error occurred while running the command!', ephemeral: true });
    };
    
};

export { event, execute };