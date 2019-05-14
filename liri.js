require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const moment = require('moment');

const axios = require('axios');

const fs = require("fs");


const command = process.argv[2];
const input = process.argv.slice(3).join(" ");

spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    } else if (command == "spotify-this-song") {
        var spotifyData = data.tracks.items[0];
        return console.log(" Artist: " + spotifyData.artists[0].name + "\n",
            "Song Name: " + spotifyData.name + "\n",
            "Preview Link: " + spotifyData.preview_url + "\n",
            "Album Name: " + spotifyData.album.name + "\n")
    }else if (input == undefined){
        console.log("sup")
    }
})

// fs.readFile("movies.txt", "utf8", function (error) {

//     if (error) {
//         return console.log(error);
//     } else 
//         spotify.search({
//             type: 'track', query: "i want it that way"
//         })
//     });

axios.get("http://www.omdbapi.com/?apikey=d606830e&t=" + input).then(
    function (response) {
        //   console.log(response)
        if (command == "movie-this") {
            console.log(" Title: " + response.data.Title + "\n",
                "Year: " + response.data.Year + "\n",
                "IMBD Rating: " + response.data.imdbRating + "\n",
                // "Rotten Tomatoes Rating: " + response.data.Ratings.Source.RottenTomatoes,
                "Produced in: " + response.data.Country + "\n",
                "Language: " + response.data.Language + "\n",
                "Plot: " + response.data.Plot + "\n",
                "Actors: " + response.data.Actors
            )
            //     }else{
            //         console.log('Mr. Nobody')

            // }
        }
    })


            axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
            .then(function (response) {
            if (command == "concert-this"){
                for (i=0; i<response.data.length; i++){
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.city);
                    var concertDate = response.data[i].datetime;
                    concertDate = moment(concertDate).format("MM/DD/YYYY");
                    console.log(concertDate);
                }
            }
        })