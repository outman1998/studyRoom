const express = require('express');
// node js middleware to handle json form data
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const mysql = require('mysql2');

app.use(cors())
app.use(bodyparser.json());

// denne port er den der skal lyttes til i postman. 
// localhost:3000/user
app.listen(3000, () => {
    console.log('server running.....');
});


// database connection 
// inside mamp you can find socket, port, user, password, host
const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'simpledb',
    port:3006,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

})


// check database connection
db.connect(err => {
    if (err) {console.log(err, 'dberr');}
    else console.log('database connected....');
});


// get all data 
app.get('/kursus', (req, res) => {

    // selects from kursus table in database
    let qr = `SELECT * FROM kursus`;

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err, 'errs');
        }

        if (result.length > 0) {
            res.send({
                message:'all kursus data',
                data:result
            });
        }

    });


});


// get single data via ID
app.get('/kursus/:id',(req, res) => {

    console.log(req.params.id, 'getiddd==>');

    let gId = req.params.id;

    let qr = `select * from kursus where id = ${gId}`;

    db.query(qr, (err, result) => {
        if(err) {
            console.log(err);
        }

        if (result) {
            res.send({
                message:'get single kursus data',
                data:result
            });
        } else {
            res.send({
                message: 'kursus data not found...'
            });
        }
    });

});


// get all courses created by specific user
app.get('/kursus/:email',(req, res) => {

    console.log(req.params.email, 'get email==>');

    let getEmail = req.params.email;

    let qr = `select * from kursus where email = ${getEmail}`;

    db.query(qr, (err, result) => {
        if(err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.send({
                message:'get all data from email',
                data:result
            });
        } else {
            res.send({
                message: 'email data not found...'
            });
        }
    });

});


// create data ( også kaldet POST i sql)
app.post('/kursus', (req, res)=> {

    console.log(req.body, 'create data');

    // sætter variabler til og være lig med vores tables værdier.
    let overskrift = req.body.overskrift;
    let beskrivelse = req.body.beskrivelse;
    let fag = req.body.fag;
    let img = req.body.img;
    let content = req.body.content;
    let email = req.body.email;


    let qr = `insert into kursus (overskrift, beskrivelse, fag, img, content, email) 
    values ( '${overskrift}', '${beskrivelse}', '${fag}', '${img}', '${content}','${email}' )`;

    // console.log(qr, 'qr');

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err);
        }
        console.log(result, 'result and created succesfully');

        res.send({
            message: 'Course created succesfully'
        });

    });

});


// update single data (også kaldet PUT i sql)
app.put('/kursus/:id', (req, res) => {

    console.log(req.body, 'updated data');

    let getId = req.params.id;

    // sætter variabler til og være lig med vores tables værdier.
    let overskrift = req.body.overskrift;
    let beskrivelse = req.body.beskrivelse;
    let fag = req.body.fag;
    let img = req.body.img;
    let content = req.body.content;
    let email = req.body.email;

    // query
    let qr = `update kursus set overskrift = "${overskrift}", beskrivelse = "${beskrivelse}", fag = "${fag}", img = "${img}", content = "${content}", email = "${email}" where id = ${getId}`;

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err);
        }

        res.send({
            message: 'Course updated succesfully'
        });

    });
})


// delete single data
app.delete('/kursus/:id', (req, res) => {

    let getId = req.params.id;

    // query
    let qr = ` delete from kursus where id = ${getId} `;

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err);
        } 

        res.send({
            message: 'data deleted'
        })
    });

});


// nodemon index.js for at køre projektet