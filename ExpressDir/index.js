const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;

app.listen(port,()=> {
  console.log(`App is listening on port ${port} }`);
});

app.get("/",(req,res)=> {
  res.send("you contected my home path");
});

app.get("/:username/:id/:name",(req,res)=> {

  let {username,id,name} = req.params;

  let htmlStr = `<h1>welcome to the page of @${username},${id},${name}</h1>`;
  res.send(htmlStr);
});

  app.get("/search",(req,res)=> {
   let {q} = req.query;
   if(!q) {
    res.send(`<h1>nothing search</h1>`)
   }
    res.send(`<h1>search result for query : ${q}</h1>`);
  });

  // console.log(req.params);
  // res.send(`you contected my home path @${username},${id},${name} `);



// app.get("/about",(req,res)=> {
//   res.send("you contected about path");
// });

// app.get("/contact",(req,res)=> {
//   res.send("you contected about path");
// });

// app.get("/service",(req,res)=> {
//   res.send("you contected service path");
// });

// app.get("/project",(req,res)=> {
//   res.send("you contected project path");
// });

// app.get("/login",(req,res)=> {
//   res.send("you contected login path");
// });

// app.get("/logout",(req,res)=> {
//   res.send("you contected logout path");
// });
// app.get("*",(req,res)=> {
//   res.send("you connected random root path");
// });


// app.post("/",(req,res)=> {
//   res.send("you send a post requiste");
// });


// app.use((req,res)=> {
  // console.log(req);
  // console.log("requiste is received");

  // res.send({
  //   name : "Suraj kumar",
  //   age : 22,
  //   color : "red",
  // });

  // let code = "<h1>Fruits</h1> <ul><li>mango</li><li>banana</li><li>apple</li><li>watermelan</li></ul>"
  // res.send(code);

// });