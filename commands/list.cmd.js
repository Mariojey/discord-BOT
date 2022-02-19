const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "list",
    description: "Wyświetlanie listy wszystkich komenda na bocie",

    run(msg) {
        const { channel } = msg

        const cmdList = new MessageEmbed()

        .setTitle("PFE_info BOT")
            .setColor("0x00FF00")
            .setDescription("Komendy:")
            .setFooter("2021-2022 ©Polska Federacja Esportowa")
            //
            .addField("?teams", "Komenda wyświetlająca drużyny które zapisały się na turniej obecnie organizowany przez PFE")
            .addField("?fb", "Tutaj znajdziesz naszego facebook`a")
            .addField("?info", "Informacje techniczne odnośnie bota")
            .addField("?clear", "!clear <liczba_wiadomości_do_usunięcia>")
            .addField("?list", "Komenda wyświetla listę wszytskich komend")
            .addField("?twitch", "Po kliknięciu przekieruje Cię na naszego twitcha")
            .addField("?partners", "Zobaczy naszych partnerów i komendy do nich")


        channel.send({ embeds: [cmdList] })
    },
}