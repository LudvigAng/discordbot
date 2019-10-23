const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.channel.send('https://media.giphy.com/media/PfHrNe1cSKAjC/giphy.gif ' + message.author);
}

module.exports.help = {
    name: "hej"
  }
