const express = require("express");

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.get('/api/members', (req, res) => { require(./routes/)})
app.use("/api/members", require("./routes/api/crud"));

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
