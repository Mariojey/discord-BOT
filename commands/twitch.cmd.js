const { Message, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
    name: "twitch",
    description: "Najważniejsze informacje odnośnie PFE!",

    run(msg) {
        const { channel } = msg;

        /* To tak na zadziała bo button to po prostu messagecomponent

        const btn = new MessageButton()
            .setURL(`https://www.facebook.com/PolskaFederacjaEsportowa/`)
            .setLabel("PFE")
            .setStyle('PRIMARY') //do url potrzebujesz typ LINK

        channel.send('Odwiedź oficjalnego facebooka PFE!!!', { buttons: [btn] });

        */

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setURL(`https://www.twitch.tv/pfelive`)
                .setLabel('PFE')
                .setStyle('LINK')
            );

        channel.send({ content: 'Zobacz co tam na naszym twitchu!!!', components: [row] });
    },
}