// Require the necessary discord.js classes
const {
  Client, Events, GatewayIntentBits, Collection,
} = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN } = process.env;

// importação dos comandos do bot
const fs = require('fs');
const path = require('path');

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js')); // commandsFiles vai alocar os arquivos que serão puxados

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `Esse comando em  ${filePath} esta com "data" ou "execute ausentes"`,
    );
  }
}
// login do bot
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});
// Log in to Discord with your client's token
client.login(TOKEN);

// listener de interações com o bot
client.on(Events.InteractionCreate, (interaction) => {
  if (interaction.isStringSelectMenu()) {
    const selected = interaction.values[0];
    if (selected === 'javascript') {}
  }
});
