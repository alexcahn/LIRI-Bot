require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var command = process.argv[2];
var input = process.argv[3];
  
spotify.search({ type: 'track', query: input}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }else if (command == "spotify-this-song"){
    var spotifyData = data.tracks.items[0];
    return console.log( " Artist: " + spotifyData.artists[0].name + "\n",
    "Song Name: " + spotifyData.name + "\n",
    "Preview Link: " + spotifyData.preview_url + "\n",
    "Album Name: " + spotifyData.album.name + "\n")
}
// display 'the sign' by ace base
// else if(input == ""){
//     console.log (input = "The sign")
// }
 
// console.log(data.tracks.items); 
});


