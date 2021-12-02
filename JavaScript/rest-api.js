// npm init
// npm install express
// npm install nodemon
// "start": "nodemon app.js"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`You're connected to port ${port}!`));
