const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "💋",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
I am ArslanMD-BOT
`
await conn.sendMessage(from,{video:{url: `https://files.catbox.moe/h6ru3v.mp4`},mimetype:"video/mp4"},{caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
