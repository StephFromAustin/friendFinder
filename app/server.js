// DEPENDENCIES 
const express = require('express'); // NODE.JS SERVER EXPRESS FRAMEWORK 
const path = require ('path');
// CONFIGURE EXPRESS 
const app = express ();

// SET PORT FOR APPLICATION 
const PORT = process.env.PORT || 8080;

// SET UP THE EXPRESS APP TO HANDLE DATA PARSING 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

