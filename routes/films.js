var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors')
var bodyParser = require("body-parser");
var fs = require('fs');

var mysql = require('../database.js');



router.get('/chat', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./views/index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });

});

router.get('/films/:id' , (req, res) => {
    mysql.query("SELECT film_id, poster_url, title_name, genre_name, release_date, film_review, trailer_url FROM films WHERE film_id = ? ",[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })


} );
router.get('/films' , (req, res) => {
    mysql.query("SELECT film_id, poster_url, title_name, genre_name, release_date, film_review, trailer_url FROM films ", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
} );

module.exports = router;

