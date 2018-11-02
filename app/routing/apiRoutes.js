// DEPENDENCIES // CORRECT?
const path = require('path');
const friends = require ('..data/friends');

// API POST & GET REQUEST | FUNCTION THAT PULLS DATA
module.exports = function(app) {
    // API GET 
    app.get('/api/friends', function (req, res){
        res.json(friends);
    });
    // API POST 
    app.get('/api/friends', function (req, res){
        // VARIABLES 
        let userRes = req.body;
        let userScores = userRes.scores;
            // USER MATCH VARIABLES 

        // would a for loop work here? goes through friends.length and then userRes.length? NEED MATH SYNTAX!
    
    // PUSH AND RESPONSE FROM JSON 
    friends.push(userRes);
    // res.json({ SHOULD USER MATCH VAIRABLES GO HERE?})
    
    })
};