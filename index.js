// import "reflect-metadata";
var express = require("express");
var app = express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.get('/api/members', (req, res) => { require(./routes/)})
app.use('/api/members', require('./routes/api/crud'));
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () { return console.log("Server started on port: " + PORT); });
