// DEPENDENCIES 
const express = require('express'); // NODE.JS SERVER EXPRESS FRAMEWORK 
const path = require('path');
const bodyParser = require('body-parser');
// CONFIGURE EXPRESS 
const app = express();

// SET PORT FOR APPLICATION 
const PORT = process.env.PORT || 8080;

// SET UP THE EXPRESS APP TO HANDLE DATA PARSING 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES 
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTEN FUNCTION: START SERVER TO BEGIN LISTENING TO CLIENT REQUESTS 
app.listen(PORT, function () {
    // THIS WILL LOG ON SERVER SIDE WHEN SERVER HAS INITIATED 
    console.log("Server is listening on:" + PORT);

});