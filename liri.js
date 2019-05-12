// info for spotify
// require("dotenv").config();
// var Spotify = require("node-spotify-api");
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var axios = require('axios');

var command = process.argv[2];
var input = process.argv[3];

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'eb487059cae8460f9de023a368acb3b5',
  secret: 'f7dd2d1a05ae4be18e3069d60cc42b64'
});
 
spotify.search({ type: 'track', query: 'All the Small Things', limit: 3 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

