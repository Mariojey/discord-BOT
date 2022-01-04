const { Collection } = require("discord.js");

const { readdirSync } = require("fs");

const commands = require("./../commands");

const { prefix } = require(__dirname + "/../config/config.js")


const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Status");

module.exports = (client) => {
    //Commands
    client.commands = new Collection();

    //Wyświetlanie wszystkich komend w consoli node.js w tablicy
    for (const command of commands) {
        if (command.name) {
            client.commands.set(command.name, command)
            table.addRow(command.name, "\u2705");
        }
    }
    //Wyświetlanie danych zapisanych od tablicy w pętli wyżej w konsoli
    console.log(table.toString());

    client.on("message", (msg) => {
        console.log(msg.content, msg.author.tag);
        const { author, guild, channel } = msg;
        //Sprawdzanie czy użytkownik jest botem
        if (author.bot) {
            // || guild - wiadomość nie została wysłana w gildii/kanale tylko na priv bota
            console.log(`Bot`);
        }

        /*Sprawdzanie czy wiadomość nie zaczyna się od prefiux
        if (msg.content.indexOf(prefix) !== 0) {
            msg.reply('Nieznana komenda')
        }
    */
        //Ignorowanie wiadmości bez prefixu
        if (!msg.content.startsWith(prefix)) return
            //Rozdzielanie argumentów dla danej komendy spacją.
        const args = msg.content.slice(prefix.length).trim().split(/ +/g)
            //Shift usuwa pierwszy argument i go zwraca
        const cmdName = args.shift().toLowerCase()


        //Sprawdzanie czy komenda nie jest przypadkiem jak moje chęci do życia.
        if (!client.commands.has(cmdName)) return

        const cmd = client.commands.get(cmdName);

        if (cmd.args && !args.length) {
            let reply = `Nie podanu argumentu komendy, ${msg.author}!`;

            if (cmd.usage) {
                reply = `\n Użyj: \`${prefix}${cmdName} ${cmd.usage}\``;
            }
            return msg.channel.send(reply)
        }

        try {
            cmd.run(msg, args);
        } catch (error) {
            console.log(error);
            msg.reply("Podana komenda nie istnieje wpisz !list aby zobaczyć pełną listę komend!")
        }
    });
}