const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Användarinfo")
        .setColor("#1561db")
        .addField("Användarnamn", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Skapades", message.author.createdAt);

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "userinfo"
}
