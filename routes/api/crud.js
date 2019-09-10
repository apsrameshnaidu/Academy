var express = require('express');
var router = express.Router();
var members = require('./members');
var uuid = require('uuid');
var mysql = require('mysql');
// Create Connection
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12#Ramesh',
    database: 'rameshdb'
});
// Connect
db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('MySql Connected....');
});
// Get All members
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM academy_info GROUP BY sno';
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        res.json(result);
    });
});
// Get single member
router.get('/:id', function (req, res) {
    var sql = "SELECT * FROM academy_info WHERE sno = " + parseInt(req.params.id);
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        if (sql) {
            res.json(result);
        }
        else {
            res.status(400).json({ msg: "NO member with the id if " + req.params.id });
        }
    });
});
// Create Memebr
router.post('/', function (req, res) {
    if (!req.body.name) {
        return res.status(400).json({ msg: 'Name is Mandatory!' });
    }
    var sql = "INSERT INTO academy_info (name, location, description) VALUES ('" + req.body.name + "', '" + req.body.location + "', '" + req.body.description + "')";
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        return res.status(200).json({ msg: 'Member Saved.' });
    });
});
// Update Member
router.put('/:id', function (req, res) {
    if (!req.body.name) {
        return res.status(400).json({ msg: 'Name is Mandatory!' });
    }
    var sql = "UPDATE academy_info SET name ='" + req.body.name + "', location = '" + req.body.location + "', description = '" + req.body.description + "' WHERE sno = " + parseInt(req.params.id);
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        return res.status(200).json({ msg: 'Member Updated.' });
    });
});
// Delete member
router["delete"]('/:id', function (req, res) {
    var sql = "DELETE FROM academy_info WHERE sno = " + parseInt(req.params.id);
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        res.json(result);
    });
    res.json({ msg: 'Member Deleted' });
});
module.exports = router;
