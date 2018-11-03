// DEPENDENCIES // CORRECT?
const path = require('path');
const friends = require('../data/friends');

// API POST & GET REQUEST | FUNCTION THAT PULLS DATA
module.exports = function (app) {
    // API GET 
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // API POST 
    app.post('/api/friends', function (req, res) {
        // VARIABLES 
        console.log(friends);
        let userRes = req.body;
        let userScores = userRes.scores;
        let match = {};
        // USER MATCH VARIABLES 
        // value += 5
        // value = value + 5 same as above
        // would a for loop work here? goes through friends.length and then userRes.length? NEED MATH SYNTAX!
        // Moving through friends array from friend.js
        for (let i = 0; i < friends.length; i++){
            // initializing best total difference
            let totalDiff = 100;
            // for loop to compare the individual scores per friend
            for (let j = 0; j < userScores.length; j++) {
                // initialize the current different
                let currentDiff = 0;
                // gather current difference by comparing the scores of the current friend and the scores of the user
                currentDiff += Math.abs(friends[i].scores[j] - parseInt(userScores[j]))
                // if the current difference (in the scope of this for loop) is less than the total difference than that is the better match 
                if (currentDiff < totalDiff) {
                    // Setting match equal to the friend that we are currently looking at in the for loop
                    match = friends[i]
                }
            }
        }
// trying to see if this works erase me later :D
        res.json(match)
        // PUSH AND RESPONSE FROM JSON 
        friends.push(userRes);
        // res.json({ SHOULD USER MATCH VAIRABLES GO HERE?})
        res.json({matchname: matchName, matchpicture: matchPicture, matchbio: matchBio});
    })
};