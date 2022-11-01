const{ getFiles }  = require("../Util/functions")

module.exports = (bot, reload) =>{

    const {client} = bot

    let Events = getFiles("./Events/",".js")

    if(Events.length === 0){
        console.log("No events to load")
    }

    Events.forEach((f,i) => {
        if(reload)
            delete require.cache[require.resolve(`../Event/${f}`)]
        const event = require(`../Events/${f}`)
        client.Events.set(event.name,event)

        if(!reload)
        console.log(`${i + 1}. ${f} loaded`)
    })

   

    if(!reload)
        initEvents(bot)

}

function triggerEventHandler(bot,event,...args){
    const {client} = bot

    try{
        if(client.Events.has(event))
            client.Events.get(event).run(bot,...args)
        else
            throw new Error(`Event ${event} does not exist`)

    }

    catch(err){
        console.error(err)
    }
}

function initEvents(bot) {
    const {client} = bot

    client.on("ready", () =>{
        triggerEventHandler(bot,"ready")
    })
    client.on("MessageCreate", ()=>{
        triggerEventHandler(bot,"MessageCreate")
    })
}