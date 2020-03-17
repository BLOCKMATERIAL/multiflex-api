var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors')
var bodyParser = require("body-parser");
var fs = require('fs');

var mysql = require('../database.js');

//

router.get('/films/:id' , (req, res) => {
    mysql.query("SELECT * FROM films WHERE id = ? ",[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })


} );
router.get('/films' , (req, res) => {
        mysql.query("SELECT * FROM films ", (err, rows, fields) => {
            if (!err)
            res.send(rows);
        else
            console.log(err);
    })
} );

module.exports = router;

