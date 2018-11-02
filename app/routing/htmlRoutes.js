// DEPENDENCIES 
const path = require ('path');

// ROUTE
module.exports = function (app){
      // HTML GET REQUEST.
        //DIRECT USER TO HOME PAGE AND SURVEY PAGE.
    app.get('/home', function (req, res){
        res.sendFile(path.join(_dirname + '/../public/home.html'));
    });
    app.get('/survey', function (req, res){
        res.sendFile(path.join(_dirname + '/../public/survey/html'));
    })
}
