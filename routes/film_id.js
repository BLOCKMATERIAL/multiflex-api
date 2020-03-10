var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors')

var router = express.Router();
var mysql = require('../app.js');


router.get('/films/:id' , (req, res) => {
    mysql.conn.query("SELECT film_id, poster_url, tittle_name, genre_name, release_date FROM films WHERE film_id = ? ",[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })


} );
router.get('/films' , (req, res) => {
    mysql.conn.query("SELECT film_id, poster_url, tittle_name, genre_name, release_date FROM films ", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
} );

module.exports = router;

