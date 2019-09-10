const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create Connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12#Ramesh',
    database : 'rameshdb'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected....');
});

// Get All members
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM academy_info GROUP BY sno';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

// Get single member
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM academy_info WHERE sno = ${parseInt(req.params.id)}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        if(sql) {
            res.json(result);
        } else {
            res.status(400).json({ msg: `NO member with the id if ${req.params.id}` });
        }
        
    });
});

// Create Memebr
router.post('/', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ msg: 'Name is Mandatory!' });
    }
    let sql = `INSERT INTO academy_info (name, location, description) VALUES ('${req.body.name}', '${req.body.location}', '${req.body.description}')`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.status(200).json({ msg: 'Member Saved.' });
    });
});

// Update Member
router.put('/:id', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ msg: 'Name is Mandatory!' });
    }
    let sql = `UPDATE academy_info SET name ='${req.body.name}', location = '${req.body.location}', description = '${req.body.description}' WHERE sno = ${parseInt(req.params.id)}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.status(200).json({ msg: 'Member Updated.' });
    });
});

// Delete member
router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM academy_info WHERE sno = ${parseInt(req.params.id)}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
    res.json({ msg: 'Member Deleted'});
});

module.exports = router;
