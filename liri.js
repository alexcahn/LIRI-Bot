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
})

axios.get("http://www.omdbapi.com/?apikey=d606830e&t=" + input).then(
  function(response) {
    //   console.log(response)
    if (command == "movie-this"){
    console.log(" Title: " + response.data.Title + "\n",
    "Year: " + response.data.Year + "\n",
    "IMBD Rating: " + response.data.imdbRating + "\n",
    // "Rotten Tomatoes Rating: " + response.data.Ratings.Source.RottenTomatoes,
    "Produced in: " + response.data.Country + "\n",
    "Language: " + response.data.Language + "\n",
    "Plot: " + response.data.Plot + "\n",
    "Actors: " + response.data.Actors
    )
    }
  }
);

