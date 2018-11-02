// DEPENDENCIES 
const path = require ('path');

// ROUTE
module.exports = function (app){
    app.get('/home', function (req, res){
        res.sendFile(path.join(_dirname + '/../public/home.html'));
    });
    app.get('/survey', function (req, res){
        res.sendFile(path.join(_dirname + '/../public/survey/html'));
    })
}
