var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
const pool = require('generic-pool');;
const bodyparser = require('body-parser');

var filmsRouter = require('./routes/films');


var app = express();
var mysql = require("mysql");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.use(bodyparser.json());
app.use('/api', filmsRouter);



// app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listen on port ${port}..`));













