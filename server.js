const express = require('express');
//The path module provides a way of working with directories and file paths.
const path=require('path');
//A favicon is a visual cue that client software, like browsers, use to identify a site
// const favicon = require('favicon');
//Morgan is an HTTP request level Middleware. It is a great tool that logs the requests along with some other information depending upon its configuration and the preset used. It proves to be very helpful while debugging and also if you want to create Log files.
const logger = require('morgan');

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

//A single "catch all" route is required to serve the index.html when any non-AJAX "API" request is received by the Express app:
//The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests
app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//Set the port for development to use 3001so that React's dev server can continue to use 3000and finally, tell the Express app to listen for incoming requests:
const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log(`Express app is running on port ${port}`)
})