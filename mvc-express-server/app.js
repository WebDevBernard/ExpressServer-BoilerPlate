// npm init -y
// npm i express cors morgan dotenv nodemon
// npm install --save express-validator
// copy paste to script in package.json => "start": "nodemon app.js",
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

const feedRoutes = require("./routes/feed");
const app = express();

// middleware
// app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
app.use(express.json()); // application/json
app.use(cors());
app.use(morgan("tiny"));

// http://localhost:5000/api/posts
app.use("/feed", feedRoutes);

app.get("/", async (req, res) => {
  res.send({ message: "🚀 GET Works!" });
});

mongoose
  .connect(
    `mongodb+srv://bernard:${process.env.MONGODB_SECRET_KEY}@cluster.pqge5.mongodb.net/messages?retryWrites=true`
  )
  .then((result) =>
    app.listen(port, () =>
      console.log(`🚀 Server running on http://localhost:${port}!`)
    )
  )
  .catch((err) => console.log(err));
