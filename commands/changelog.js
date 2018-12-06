const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Changelog ${client.config.botVersion}`)
    .setDescription("- Changed prefix from `>` to `yabe` to resolve conflicts\n- Added a `translate` command\n- Rewrote the entirety of the help command\n- Added Osu and Uptime commands\n- Version bump")
    .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
    .setFooter("Last updated on 5th/Dec/2018")
    .setColor(client.config.embedColor)
    
    message.channel.send(embed);
}

exports.help = {
    name: "changelog",
    description: "The `changelog` command displays an embed of latest changes to the bot.",
    usage: "`yabe changelog`",
}
