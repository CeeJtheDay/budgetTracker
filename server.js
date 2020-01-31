const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://user:password1@ds315359.mlab.com:15359/heroku_063lrl8g", {
  useNewUrlParser: true,
  useFindAndModify: false
});





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});