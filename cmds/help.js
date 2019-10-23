const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.author.send("**KOMMANDON FÖR DISCORDBOT** \n\n!say #\nUpprepar det du skriver efteråt.\n\n!clear #\nTar bort ett bestämt antal meddelanden.\n\n!userinfo\nVisar info om användaren.\n\n!avatar\nVisar en större bild av ens profilbild.\n\n!mute #\nBestämd användare kan inte längre skriva i chatten.\n\n!unmute #\nTar bort mute-funktionen från bestämd användare.\n\n!hej etc\nHälsar tillbaka.");
}

module.exports.help = {
    name: "help"
  }
