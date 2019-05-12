// info for spotify
require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');

var command = process.argv[2];
var input = process.argv[3];
 
spotify.search({ type: 'track', query: 'All the Small Things', limit: 3 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

