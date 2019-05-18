require("dotenv").config();

var SwitchStatement = require("./switchStatement");
const fs = require("fs");

var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

SwitchStatement(command, input);


if (command === "do-what-it-says"){
    doWhatItSays()
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) throw error;
        data = data.split(",")

        for (var i = 0; i < data.length; i++) {
            if (i % 2 === 0) {
                console.log(data[i])
                console.log(data[i + 1])
                console.log("----------")
                SwitchStatement(data[i], data[i+1])
            }
        }
    })
}