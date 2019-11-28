const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    })
});



bot.on("ready", () => {
    console.log(`Bot is ready! ${bot.user.username}`);
});

bot.on("message", message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const bannedWords = [];
    //fill the bannedWords array with words you don't want present on your server. If a user posts a message
    //containing one of the banned words the bot will delete the entire message.

    const messageToCheck = message.content.replace(/\s/g, "");

    for (var i = 0; i < bannedWords.length; i++) {

        if(messageToCheck.toLocaleLowerCase().indexOf(bannedWords[i]) != -1) {
            console.log("Message containing '" + bannedWords[i] + "' deleted")
            message.delete();
            break;
        }
    }

    if(message.mentions.members.first()) {
        if(message.mentions.users.first().username === bot.user.username) message.channel.send("Hej på dig!");
    }

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content === "hello there")  message.channel.send("Hello there!");

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});

bot.login(botSettings.token);
