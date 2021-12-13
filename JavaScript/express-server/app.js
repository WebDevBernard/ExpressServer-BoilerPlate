// npm init
// npm i express cors morgan dotenv nodemon
// copy paste to script in package.json => "start": "nodemon app.js",
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));

// routes

// http://localhost:5000/api/1
app.use("/api", require("./routes/route"));

// GET, PUT, POST, DELETE

app.get("/", async (req, res) => {
  res.send({ message: "🚀 GET Works!" });
});

app.listen(port, () =>
  console.log(`🚀 Server running on http://localhost:${port}!`)
);
