const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

module.exports = function(song){
    if (!song) {
        song = "The Sign, Ace of Base"
    }
    spotify.search({ type: 'track', query: song }, function (err, data, ) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var spotifyData = data.tracks.items[0];
        if (spotifyData) {
            return console.log(" Artist: " + spotifyData.artists[0].name + "\n",
                "Song Name: " + spotifyData.name + "\n",
                "Preview Link: " + spotifyData.preview_url + "\n",
                "Album Name: " + spotifyData.album.name + "\n")
        }
    })
}