module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Genererar avatar...");

    message.channel.send({files: [
        {
            attachment: message.author.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar"
}
