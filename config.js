/**  
 * @description Bot's token
 * @type {string}
 */
const token = '';

/** 
 * @description Specifies whether the bot will automatically join a voice channel at startup - Set true to join, false to not join
 * @type {boolean}
 * @default false
 */
const join_vc = false;

/**  
 * @description ID of the voice channel for the bot to join (if join_vc is true)
 * @type {string}
 */
const vc_id  = '';

/**  
 * @description Bot's status - 🟢 Online = 'online' | 🌙 Idle = 'idle' | ⛔ Do Not Disturb = 'dnd' | 👻 Invisible (Offline) = 'invisible'
 * @type {string}
 * @default 'online'
 */
const status = 'online';

/**  
 * @description Activity name to be displayed in bot's presence
 * @type {string}
 */
const activity_name = '❤ muhosekerci';

/**  
 * @description Type of activity to be displayed in bot's presence - 🎮 Playing = 'Playing' | 🎧 Listening = 'Listening' | 👀 Watching = 'Watching'
 * @type {string}
 * @default 'Playing'
 */
const activity_type = 'Playing';

export { token, join_vc, vc_id, status, activity_name, activity_type };