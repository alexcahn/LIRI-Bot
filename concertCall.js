const moment = require('moment');
const axios = require('axios');

module.exports = function(artist){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
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