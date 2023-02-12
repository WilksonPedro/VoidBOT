// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

//  criar uma const dotenv
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);
