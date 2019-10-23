const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Du har inte rättighet att hantera meddelanden.");

    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Du nämnde ingen användare eller ID!");

    if(toMute.id === message.author.id) return message.channel.send("Du kan inte muta dig själv.");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Du kan inte muta en användare som har högre roll än dig.");

    let role = message.guild.roles.find(r => r.name === "DB Muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("Användaren är inte mutad!");

    await toMute.removeRole(role);
    message.channel.send("Användare inte mutad längre.");

    return;
}

module.exports.help = {
    name: "unmute"
}
