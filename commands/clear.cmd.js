module.exports = {
    name: "clear",
    description: "Komenda usuwająca wiadomości na kanale",
    args: true,
    usage: "<amount>",

    run(msg, args) {
        const { channel } = msg
        const amount = parseInt(args[0]);

        if (!Number.isInteger(amount)) {
            return channel.send("Podaj ilość wiadomości które chcesz usunąć - !clear ilość wiadomości")
        }

        if (amount < 2 || amount >= 50) {
            return channel.send("Nie szalej mordo! - Maksymalna ilość wiadomości do usunięcia to 50, minimalna to 2")
        }

        channel.bulkDelete(amount);
    },
}