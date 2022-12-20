const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors())
app.use(bodyparser.json());



// database connection 
// inside mamp you can find socket, port, user, password, host
// database is the db you create in phpmyadmin
const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'simpledb',
    port:3006,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

// module.exports = {
//     HOST: 'us-cdbr-east-06.cleardb.net',
//     USER: 'bd01faf9cbd515',
//     PASSWORD: '9a0318b0',
//     DB: 'heroku_d6c798b396e8031'
// };





// check database connection
db.connect(err => {
    if (err) {console.log(err, 'dberr');}
    console.log('database connected....');
});


// get all data 
app.get('/kursus', (req, res) => {

    // selects from user table in database
    let qr = `select * from kursus`;

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

// get all courses created by specific user
app.get('/kursus/:email',(req, res) => {

    console.log(req.params.email, 'getid==>');

    let getEmail = req.params.email;

    let qr = `select * from kursus where email = '${getEmail}'`;

    db.query(qr, (err, result) => {
        if(err) {
            console.log(err);
        }

        if (result.length > 0) {
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
// get single data via ID
app.get('/kursus/:id',(req, res) => {

    console.log(req.params.id, 'getid==>');

    let getId = req.params.id;

    let qr = `select * from kursus where id = ${getId}`;

    db.query(qr, (err, result) => {
        if(err) {
            console.log(err);
        }

        if (result.length > 0) {
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


// create data ( også kaldet POST i sql)
app.post('/kursus', (req, res)=> {

    console.log(req.body, 'create data');

    // sætter variabler til og være lig med vores tables værdier.
    // let fullName = req.body.fullname;
    // let eMail = req.body.email;
    // let mobil = req.body.mobil;

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
        console.log(result, 'result');

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
            message: 'User updated succesfully'
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


// denne port er den der skal lyttes til i postman. 
// localhost:3000/user

app.listen(3000, () => {
    console.log('server running.....');
});


// npm i express body-parser cors mysql2
// kør nodemon index.js 