const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
const deleteCount = parseInt(args[0], 10)
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Välj antalet meddelanden som ska bort! (mellan 2 och 100)")

      const fetched = await message.channel.fetchMessages({limit: deleteCount + 1})
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Kunde inte radera meddelanden på grund av: ${error}`));

}

module.exports.help = {
    name: "clear"
}
