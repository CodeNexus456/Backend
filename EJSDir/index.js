const express = require("express");
const { userInfo } = require("os");
const app = express();
const path = require("path");

const port = 8080;
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/ig/:username", (req, res) => {

  let {username} = req.params;
  const instData = require("./views/data.json");
  const data = instData[username];
  if(data) {
    res.render("instagram.ejs",{ data });
  } else{
   res.render("error.ejs");
  }
});

app.get("/rolldice", (req, res) => {
  let DiceVlue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { DiceVlue });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
