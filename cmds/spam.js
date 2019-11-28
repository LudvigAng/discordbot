const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    let toSpam = message.mentions.members.first()

    if(!toSpam) return message.channel.send("Du nämnde ingen användare eller ID!");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send("Du har inte rättigheten att spamma")
    }
    else {
        for(let i = 0; i < 10; i++) {
            message.channel.send("HAÅ " + toSpam);
        }
    }

}

module.exports.help = {
    name: "spam"
}
