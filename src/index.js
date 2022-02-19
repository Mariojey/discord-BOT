const Discord = require("discord.js");
const MessageEmbed = require('discord.js').MessageEmbed;
const config = require("../config/config.js");
const commandHandler = require("../handlers/cmd.handler.js")
const { token } = config;
// CONNECT DO BAZY
// const mongoose = require('mongoose');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })



//Inicjacja commandHandlera
commandHandler(client)
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/*
if (msg.content === "cmd") {
    Wykonanie
}
*/
client.login(token);



// CONNECT DO BAZY
// const mongoose = require('mongoose');

// mongoose.connect(config.databaseConnectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     poolSize: 50
// });

// let db = mongoose.connection;

// db.on('error', (error) => console.error(error));

// db.once('open', () => {
//     console.log('Connected to DB!');
// });



client.on("debug", () => {})
client.on("warn", (msg) => {
    console.log('Warn');
})
client.on("error", () => {})