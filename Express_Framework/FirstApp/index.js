const { response } = require("express");
const express = require("express"); //* In order to use express we need to require it.
const app = express(); //* express is a function, whatever the value is return
//* we are storing it in our app.

//* let see what we get from express() function.
console.dir(app);

//? To run this node, use command node index.js.

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

//! we need to open the web browser and need to type localhost:3000 in the url address bar.
// app.use((req,res)=>{
//     console.log("We Got a new Request.");
//      res.send("Hello, We got your Request!!!! This is the Response to it.");
//      res.send({color:"red"});

//     res.send("<h1>This is the express framework</h1>");

// })

//! we have commented the use and send methods of app and res.

app.get("/", (req, res) => {
  res.send("This is the home page ");
  //* when we write in the URL "localhost:3000/" it will be taken as root page of our app.
});

app.get("/cats", (req, res) => {
  res.send("Billi bole Meow");
});

app.get("/r/:subQuery", (req, res) => {
  //* req will contain the request made by the web browser.
  //! req contains a method called params which dispalys us what user has entered.

  console.log(req.params);

  res.send("This is a SubQuery");
  //* Anything after /r/ to that request we'll send this response.
});

app.post("/cats", (req, res) => {
  res.send("Post Request is here. This is completely different response");
  //* Their are two types of request. get and post request.
});

app.get("/dogs", (req, res) => {
  res.send("Wooof!");
});

//* Adding a new route.
app.get("/search", (req, res) => {
  //! request and response object are created by express framework for us.
  // console.log(req.query); //! Request has a method called query
  // res.send("HI!!!");

  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing search");
    //!This will be printed in the webpage.
  }
  //* request object .query will return an object.
  res.send(`<h1>Search results for: ${q} </h1>`);
  //* response.send will in the webpage.
});

