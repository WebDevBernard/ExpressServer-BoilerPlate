// npm init -y
// npm i express cors morgan dotenv nodemon
// copy paste to script in package.json => "start": "nodemon app.js",
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
require("dotenv").config();

const routes = require("./routes/route");
const app = express();

// middleware
// app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
app.use(express.json()); // application/json
app.use(cors());
app.use(morgan("tiny"));

// http://localhost:5000/api/posts
app.use("/api", routes);

app.get("/", async (req, res) => {
  res.send({ message: "🚀 GET Works!" });
});

app.listen(port, () =>
  console.log(`🚀 Server running on http://localhost:${port}!`)
);
