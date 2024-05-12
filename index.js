const express = require("express");
const app = express();
const path = require("path");
// const mongoose = require("mongoose");
const methodOverride = require("method-override");

// DataBase Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/instagram")
//   .then(() => console.log("Database Connected"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(8000, () => {
  console.log("Server Start at 8000");
});
