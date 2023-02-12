const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('responde com "pong!"')
    .setExecute(async (interaction) => {
      await interaction.reply('pong!');
    }),
};
