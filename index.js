import { Client, Collection } from 'discord.js';
import { readdir } from 'fs';
import { token } from './config.js';

const client = new Client({ intents: 3243773 });

// Assignments
client.commands = new Collection();

function loadEvents() {
    readdir('./events', (err, files) => {
        if (err) return console.error('[x] Error while loading events:', err); 
        files.forEach(file => {
            import(`./events/${file}`).then(eventFile => {
                client.on(eventFile.event, (...args) => eventFile.execute(client, ...args));
            }).catch(err => {
                console.error(`[x] Error while loading event ${file}:`, err);
            });
        });
    });
};
function loadCommands() {
    readdir('./commands', (err, files) => {
        if (err) return console.error('[x] Error while loading commands:', err);
        files.forEach(file => {
            import(`./commands/${file}`).then(commandFile => {
                client.commands.set(commandFile.data.name, commandFile);
            }).catch(err => {
                console.error(`[x] Error while loading command ${file.replace('.js', '')}:`, err);
            });
        });
    });
}

loadEvents(); // Event loader
loadCommands(); // Command loader

client.login(token)
.catch(() => 
    console.log('%s\x1b[4m%s\x1b[0m%s', '[x] Login failed, please check the token in ', 'config.js', ' file.')
      );