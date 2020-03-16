const mysql = require('mysql');
const express = require('express');


var cors = require('cors')
const bodyparser = require('body-parser');


var filmIdRouter = require('./routes/film_id');


var app = express();
//Configuring express server
app.use(bodyparser.json());



app.use('/api', filmIdRouter);


var mysqlConnection = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "root",
    // database: "multiflex",
    // multipleStatements: true

    host: "eu-cdbr-west-02.cleardb.net",
    user: "b4a6c581fd633b",
    password: "93985fe0",
    database: "heroku_7afb22a21ed93ec",
    multipleStatements: true
});


const port = process.env.PORT || 1000;

app.listen(port,  () => console.log(`Listening on port ${port}..`));









// app.get('/films/:id' , (req, res) => {
//     mysqlConnection.query("SELECT film_id, poster_url, tittle_name, genre_name, release_date FROM films WHERE film_id = ? ",[req.params.id], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
//
//
// } );


module.exports.conn =  mysqlConnection;

