// DEPENDENCIES 
const path = require('path');

// ROUTE
module.exports = function (app) {
    // HTML GET REQUEST.
    //DIRECT USER TO HOME PAGE AND SURVEY PAGE.
    app.get('/', function (req, res) { // ASK!!! COULD HOME JUST BE '/'?
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    })
}
