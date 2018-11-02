// DEPENDENCIES // CORRECT?
const path = require('path');
const friends = require ('..data/friends');

// API POST & GET REQUEST | FUNCTION THAT PULLS DATA
module.exports = function(app) {
    // API GET 
    app.get('/api/friends', function (req, res){
        res.json(friends);
    });
}