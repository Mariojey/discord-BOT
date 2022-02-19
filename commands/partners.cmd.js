const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "partners",
    description: "Komenda wyświetlająca partnerów PFE!",

    run(msg) {
        const { channel } = msg

        const cmdPartnersList = new MessageEmbed()

        .setTitle("Nasi partnerzy!")
            .setColor("0x00FF00")
            .setDescription("Zajrzyjcie na ich media społecznościowe wpisując podane niżej komendy.")
            .setFooter("2021-2022 ©Polska Federacja Esportowa")
            //
            .addField("Marvo", " Nasz główny partner, producent sprzętu elektronicznego dla graczy, odwiedź ich fb wpisując komendę  **?marvo**")
            .addField("Klub Muzyczny Hades", " Klub Muzyczny Hades to miejsce spotkań z muzyką na żywo. Oferujemy ciekawe alkohole i przepyszne drinki. Zapraszamy! **?hades** (in-progress)")
            .addField("Imprezowy Region", " Wydarzenia, Koncerty, Region,Imprezy, Kluby, Muzyka, Tarnow, już za niedługo będziecie mogli wejść na ich fb za pomocą:   **?impreza**")
        channel.send({ embeds: [cmdPartnersList] })
    },
}