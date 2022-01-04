const { MessageEmbed } = require('discord.js');
var XLSX = require('xlsx')

const TEAMS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
];

module.exports = {
    name: "teams",
    description: "Komedna wyświetla listę drużyn, które zapisały się akutalnie",

    run(msg) {
        const { channel } = msg

        //WYsyłanie na kanał

        var workbook = XLSX.readFile(__dirname + "XLSX_FILE");
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        var bigField = "**lp** **Nick gracza&NIckKapitana**";
        var index = 1

        xlData.forEach(obj => {
            bigField += "" + index + ". " + obj.fields_crown_nick + " & " + obj.fields_crown_captain_nick + "\n"
            index += 1;
        })


        const teamsBot = new MessageEmbed()

        .setTitle("Informacje o zespołach")
            .setColor("0x00FF00")
            .setDescription("Zapisane drużyny\n\n" + bigField)
            .setFooter("2021-2022 ©Polska Federacja Esportowa");


        /*
            xlData.forEach(obj => {
            teamsBot.addField("Zespoły", obj.fields_crown_nick + " & " + obj.fields_crown_captain_nick + "\n");
        })
        */

        channel.send({ embeds: [teamsBot] })
    },

}