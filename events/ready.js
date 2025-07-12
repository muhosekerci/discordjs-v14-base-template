import { status, join_vc, vc_id, activity_name, activity_type, token } from '../config.js';
import { joinVoiceChannel } from '@discordjs/voice';
import { REST, Routes, ActivityType } from 'discord.js';

const event = 'ready';

function validateStatus(s) {
    return ['online', 'idle', 'dnd', 'invisible'].includes(s) ? s : 'online';
};
function validateActivityName(name) {
    return name && typeof name === 'string' && name.trim() !== '' ? name : '❤ alper.dev';
};
function validateActivityType(type) {
    return ['Playing', 'Watching', 'Listening'].includes(type) ? type : 'Playing';
};
function joinChannel(client) {
    let channel = client.channels.cache.get(vc_id);
    if (!channel) return console.error('[x] Could not connect to voice channel!');
    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guildId,
        adapterCreator: channel.guild.voiceAdapterCreator
    })
    .then(() => console.log(`[✔] Connected to voice channel "${channel.name}"!`))
    .catch(() => console.log('[x] Could not connect to voice channel!'));
};
async function registerCommands(client) {
    const commands = client.commands.map(c => c.data);
    const rest = new REST({ version: '10' }).setToken(token);
    try {
        console.log('[i] Reloading application commands...');
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        console.log('[✔] Global commands registered successfully.');
    } catch(err) {
        console.error('[x] An error occurred while registering commands:', err);
    };
};

const execute = client => {
    
    console.log(`[✔] Logged in as ${client.user.tag}!`);

    const _status = validateStatus(status);
    const _name = validateActivityName(activity_name);
    const _type = validateActivityType(activity_type);

    client.user.setStatus(_status);
    client.user.setActivity(_name, { type: ActivityType[_type] });

    if (join_vc) joinChannel(client);

    registerCommands(client);
    
};

export { event, execute };
