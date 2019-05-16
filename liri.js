require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const moment = require('moment');

const axios = require('axios');

const fs = require("fs");


var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

// if ((command=="spotify-this-song")&&(input == "")) {
//     input = "Ace is Base"
// }
// if ((command === "spotify-this-song")&&(!input)) {
//     spotifyDefault() 
// } 
if ((command==="spotify-this-song")&&(!input)) {
    spotifyDefault()
}else if ((command === "movie-this") && (!input)){
    movieDefault()
}else if (command === "spotify-this-song") {
    spotifyCall(input)
}else if (command === "movie-this") { 
    movieCall(input)
}else if (command === "concert-this") {
    concertCall(input) 
}


function spotifyCall(input) {
    spotify.search({ type: 'track', query: input }, function (err, data, ) {
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

function spotifyDefault(){
    console.log(" Artist: Ace of Base\n",
                "Song Name: The Sign\n",
                "Preview Link: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=eb487059cae8460f9de023a368acb3b5\n",
                "Album Name: The Sign")
}

function movieCall(input) {
    axios.get("http://www.omdbapi.com/?apikey=d606830e&t=" + input).then(
        function (response, err) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                console.log(" Title: " + response.data.Title + "\n",
                    "Year: " + response.data.Year + "\n",
                    "IMBD Rating: " + response.data.imdbRating + "\n",
                    "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n",
                    "Produced in: " + response.data.Country + "\n",
                    "Language: " + response.data.Language + "\n",
                    "Plot: " + response.data.Plot + "\n",
                    "Actors: " + response.data.Actors)
            }
        })
}

function concertCall() {
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response, err) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                for (i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.city);
                    var concertDate = response.data[i].datetime;
                    concertDate = moment(concertDate).format("MM/DD/YYYY");
                    console.log(concertDate);
                }
            }
        })
}

function movieDefault(){
    console.log(" Title: Mr. Nobody\n",
    "Year: 2009\n",
    "IMBD Rating: 7.8\n",
    "Rotten Tomatoes Rating: 67%",
    "Produced in: Belgium, Germany, Canada, France, USA, UK\n",
    "Language: English, Mohawk\n",
    "Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.\n",
    "Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham")
}