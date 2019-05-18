const axios = require('axios');

module.exports = function(movie){
    if (!movie) {
        movie = "caddyshack"
    }
    axios.get("http://www.omdbapi.com/?apikey=d606830e&t=" + movie).then(
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