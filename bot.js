const Discord = require("discord.js");
require("dotenv").config()
const generateImage = require("./generateimage")

  const { Client, GatewayIntentBits, MembershipScreeningFieldType } = require('discord.js');
  const client = new Client({ intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.DirectMessageTyping,
      ],
   });

let bot ={
  client,
  prefix:"n.",
  owners:["240524834369568768"]
}

client.Commands = new Discord.Collection()
client.Events = new Discord.Collection()

client.loadEvents = (bot,reload) => require("./Handlers/Events")(bot,reload)
client.loadCommands = (bot,reload) =>require("./Handlers/Commands")(bot,reload)

client.loadEvents(bot,false)
client.loadCommands(bot,false)



module.exports = bot

// Inf za terminal kad se bot upali
/*client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

//odgovor na poruku
client.on('messageCreate', async message => {
    if (message.content == 'ping') {
        await message.reply("pong")
    }
})

// asinkrona funkcija koja pozdravlja membera kad ude u server
const welcomeChannelID = "1036669922912247808"
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
      content:`<@${member.id}> Welcome to the server!`,
      files: [img]
    })

})*/

client.login(process.env.TOKEN);
