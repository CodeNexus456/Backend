const express = require("express");
const { userInfo } = require("os");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/ig/:username", (req, res) => {
 const follower = ["Suraj","Shivam","Sachin"];
 let {username} = res.params;
 res.render("instagram.ejs",{username,follower});
});

app.get("/rolldice", (req, res) => {
  let DiceVlue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { DiceVlue });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
