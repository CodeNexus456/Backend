const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/resister",(req,res)=> {
  let {user,password} = req.query;
  res.send(`Standard GET responce. Welcome ${user}!`);
});

app.post("/resister",(req,res)=> {
  let {user,password} = req.body;
  res.send(`Standard POST responce. Welcome ${user}! `);
});

app.listen(port,()=> {
  console.log(`Listening to port ${port}`);
});
