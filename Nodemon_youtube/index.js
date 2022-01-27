const express = require("express"); //* In order to use express we need to require it.
const app = express(); //* express is a function, whatever the value is return
//* we are storing it in our app.

//* let see what we get from express() function.


//? To run this node, use command node index.js.

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.get("/", (req, res)=>{
    res.send("hello there what else what doing");
})