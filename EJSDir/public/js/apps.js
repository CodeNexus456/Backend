const btns = document.querySelectorAll("button");

// btns.addEventListener("click",()=> {
//   console.log("button was clicked");
// })

for(btn of btns) {
  btn.addEventListener("click",()=> {
    console.log("button was clicked");
    
  })
};