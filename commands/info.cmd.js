const { MessageEmbed } = require('discord.js');
const { botAuthor, botName, npmVersion, botVersion, nodeVersion, nodemonVersion } = require(__dirname + "/../config/config.js")


module.exports = {
    name: "info",
    description: "Informacje odnośnie bota",

    run(msg) {
        const { channel } = msg

        //WYsyłanie na kanał

        const aboutbot = new MessageEmbed()

        .setTitle("Informacje o Bocie")
            .setColor("0x00FF00")
            .setDescription("Specyfikacja bota PFE_info")
            .setFooter("2021-2022 ©Polska Federacja Esportowa")
            //
            .addField("Nazwa", botName)
            .addField("Wersja", botVersion, true)
            .addField("Node.js", nodeVersion)
            .addField("npm", npmVersion)
            .addField("Nodemon", nodemonVersion)
            .addField("Autor", botAuthor)


        channel.send({ embeds: [aboutbot] })

    },
}