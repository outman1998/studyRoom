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

// check database connection
db.connect(err => {
    if (err) {console.log(err, 'dberr');}
    console.log('database connected...');
});


// get all data 
app.get('/user', (req, res) => {

    // selects from user table in database
    let qr = `select * from user`;

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err, 'errs');
        }

        if (result.length > 0) {
            res.send({
                message:'all user data',
                data:result
            });
        }

    });


});


// get single data via ID
app.get('/user/:id',(req, res) => {

    console.log(req.params.id, 'getid==>');

    let getId = req.params.id;

    let qr = `select * from user where id = ${getId}`;

    db.query(qr, (err, result) => {
        if(err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.send({
                message:'get single data',
                data:result
            });
        } else {
            res.send({
                message: 'data not found...'
            });
        }
    });

});


// create data ( også kaldet POST i sql)
app.post('/user', (req, res)=> {

    console.log(req.body, 'create data');

    // sætter variabler til og være lig med vores tables værdier.
    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mobil = req.body.mobil;


    let qr = `insert into user (fullname, email, mobil) 
    values ( '${fullName}', '${eMail}', '${mobil}' )`;

    // console.log(qr, 'qr');

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err);
        }
        console.log(result, 'result');

        res.send({
            message: 'data inserted succuesfully!'
        });

    });

});



// update single data (også kaldet PUT i sql)
app.put('/user/:id', (req, res) => {

    console.log(req.body, 'updated data');

    let gID = req.params.id;

    // sætter variabler til og være lig med vores tables værdier.
    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mobil = req.body.mobil;

    let qr = `update user set fullname = "${fullName}", email = "${eMail}", mobil = "${mobil}" where id = ${gID}`;

    db.query(qr, (err, result) => {

        if(err) {
            console.log(err);
        }

        res.send({
            message: 'data updated'
        });

    });

})


// delete single data
app.delete('/user/:id', (req, res) => {

    let qID = req.params.id;

    let qr = ` delete from user where id = "${qID}" `;

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