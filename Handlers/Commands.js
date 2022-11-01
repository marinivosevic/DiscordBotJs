const { getFiles } = require("../Util/functions")
const fs = require("fs")

module.exports = (bot, reload) => {
    const {client} = bot 

    fs.readdirSync("./Commands/").forEach((category) => {
        let commands = getFiles(`./Commands/${category}`, ".js")

        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../Commands/${category}/${f}`)]
            const command = require(`../Commands/${category}/${f}`)
            client.commands.set(command.name, command)
        })
    })
    console.log(`Loaded ${client.commands.size} commands`)
}