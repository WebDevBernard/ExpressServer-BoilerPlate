// REST api starting file
// npm init
// npm install express
// npm install nodemon
// copy paste to script in package.json => "start": "nodemon app.js"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// enabling CORS by setting headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(port, () => console.log(`You're connected to port ${port}!`));
