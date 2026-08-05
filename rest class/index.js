const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
// uuid
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
  {
    id: uuidv4(),
    username : "Apnacollege",
    content : "I Love coding"
  },

  {
    id: uuidv4(),
    username : "Suraj Kumar",
    content : "Hard work is important to achieve success "
  },

  {
    id: uuidv4(),
    username : "vikas Kumar",
    content : "I got selected for my first internship"
  }
]

app.get("/posts",(req,res)=> {
  res.render("../view/index.ejs",{posts});
});

app.get("/posts/new",(req,res)=> {
  res.render("../view/new.ejs");
});

app.post("/posts",(req,res) =>{
  let {username,content} = req.body;
  let id = uuidv4();
  posts.push({id,username,content});
  res.redirect("/posts");
});

app.get("/posts/:id",(req,res) =>{
 let {id} = req.params;
 let post = posts.find((p) => id === p.id);
 res.render("../view/show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=> {
   let {id} = req.params;
   console.log(id);
  res.send("patch requite working");
}); 

app.listen(port,(req,res)=> {
  console.log("Listening to port 8080");
});