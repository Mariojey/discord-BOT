module.exports = {
    name: "ping",
    description: "Bot odpisuje pong",

    run(msg) {
        msg.reply("Pong!");
    },
}