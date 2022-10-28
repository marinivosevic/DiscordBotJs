const Discord = require("discord.js");


const token =
  "MTAzNTY1NjIxNTAzMzgxNTE5Mg.GTMEC9.GsP_4MZ0e43ap8XYfeFTiOcDCVbc9JFCk0Q_HE";
  const { Client, GatewayIntentBits } = require('discord.js');
  const client = new Client({ intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.DirectMessageTyping,
      ],
   });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('messageCreate', async message => {
    if (message.content == 'ping') {
        await message.reply("pong")
    }
})
client.login(token);
