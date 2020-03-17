var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
const pool = require('generic-pool');;
const bodyparser = require('body-parser');

var filmsRouter = require('./routes/films');

var app = express();
var mysql = require("mysql");



app.use(bodyparser.json());
app.use('/api', filmsRouter);



app.use(cors());
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listen on port ${port}..`));













