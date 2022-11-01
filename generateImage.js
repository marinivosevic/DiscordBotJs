const Canvas = require("canvas")
const Discord = require("discord.js")
const Background = "https://i.imgur.com/Vzgzje1.jpg"

const dimensions={
    height:675,
    width: 1200,
    margin:50
}

const av ={
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) =>{
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format:"png",dynamic:false,size:av.size})

    const canvas = Canvas.createCanvas(dimensions.width,dimensions.height)
    const ctx = canvas.getContext("2d")
    // crta sliku 
    const backimg = await Canvas.loadImage(Background)
    ctx.drawImage(backimg,0,0)
    // Crta crni kvadrat
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dimensions.margin,dimensions.margin,dimensions.width- 2*dimensions.margin,dim.height- 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x +av.size /2,av.y+ av.size / 2,av.size /2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg,av.x,av.y)
    ctx.restore()

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"welcom.png")
    return attachment
}

module.exports = generateImage