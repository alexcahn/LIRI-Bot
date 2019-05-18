var spotifyCall = require("./spotifyCall");
var movieCall = require("./movieCall");
var concertCall = require("./concertCall")

module.exports = function(func, arg) {
    switch (func) {
        case "spotify-this-song":
            return spotifyCall(arg);
        case "movie-this":
            return movieCall(arg);
        case "concert-this":
            return concertCall(arg);
        default:
            console.log("Insert valid command")
    }
}