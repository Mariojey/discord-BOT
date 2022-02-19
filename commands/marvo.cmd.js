const { Message, MessageButton, MessageActionRow } = require('discord.js');
module.exports = {
    name: "marvo",
    description: "Odwiedz facebooka Marvo!",

    run(msg) {
        const { channel } = msg

        const rowMarvo = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setURL('https://www.facebook.com/MARVOpl')
                .setLabel('MARVO')
                .setStyle("LINK")
            );
        channel.send({ content: 'Odwiedź oficjalnego facebooka marvOOOOOOO!!!', components: [rowMarvo] });
    },
}