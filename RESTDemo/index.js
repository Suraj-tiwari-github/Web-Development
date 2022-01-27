const express=require('express');
const app=express();
const methodOverride=require('method-override');
const {v4: UUID}=require('uuid');

app.get("/home", (req,res)=>{
    res.send("GET /Home page");
    //! app.get is a get request.
})

app.get("/", (req,res)=>{
    res.send("Hello there");
})

//! In order to get the post url encoded information, we need to use this line. To parse url form encoded data.
 app.use(express.urlencoded({extended: true}))

 //! To parse json data, we need to use express.json().
 app.use(express.json());

//!Now let's send a post request.
app.post("/", (req,res)=>{
    //! we can use body only when we wrote urlencoded line.
    const {Dish,qty}=req.body
    res.send(`Ok, Here are you ${Dish}, ${qty}`)
})

app.listen(3000,()=>{
    console.log("On port : 3000");
})

const path = require("path");
//! Setting the view engine here for the ejs templates.
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


let comments = [
  {
    id: UUID(),
    username: "todd",
    comment: "lol this is funny",
  },
  {
    id: UUID(),
    username: "Skyler",
    comment: "I Like to go birdwatching with my dogs",
  },
  {
    id: UUID(),
    username: "surajtiwari1155",
    comment: "I want to be a software enginner",
  },
];

app.get('/comments', (req,res)=>{
    res.render('comments/index.ejs',{comments})
    //* Passing the our comments to index.ejs and printing it over their.
    //* to access the comments, we need to go the page : localhost:3000/comments.
}) 

//! To add a route via post, we need to write the below line.
//! app.use(express.urlencoded({extended :true})) , we are not writing it now, because we have wrote it down earlier.


app.get('/comments/new', (req,res)=>{
    res.render('comments/new.ejs');
})

app.post("/comments", (req, res) => {
  const {username, comment } = req.body;
  comments.push({username:username, comment:comment, id:UUID()});
  //! Lets now avoid resubmission of the form and use redirect of express response.
  res.redirect('/comments')
  //! The status code of redirect is 302.
});

app.get('/comments/:id',(req,res)=>{
    const { id}=req.params;
    const comment=comments.find(c=> c.id=== (id)); 
    res.render('comments/show.ejs', {comment:comment})
})

//! TO edit a comment.

//! NOTE: Place the MethodOverride over app.patch, because it won't run, It has taken 50 minutes to find out. 
//! TO Use MethodOverride we need to write this line.
app.use(methodOverride('_method'));
//* In place of _method we can use anything, just to avoid any conflicts we are using _method because in our HTML document, in form we have method='post'. 
app.get('/comments/:id/edit', (req, res)=>{
  const {id}=req.params;
  const comm=comments.find(c=> c.id ===id); 
  //* Finding the id from our object to which the id search on URL.
  res.render('comments/edit.ejs', {comm});

})

//! To Update a comment. using PATCH
app.patch('/comments/:id', (req,res)=>{
  const {id}=req.params;
    const foundComment = comments.find((c) => c.id === id);
  const newCommentText=req.body.comment; 
  //* comment is added in the body section with key and value, key is comment, and value is what we want to update with.

  foundComment.comment=newCommentText;
  //* after updating redirect.
  res.redirect('/comments');
})


//************************************
//! Route to delete, Deleting a comment.
//************************************
app.delete('/comments/:id', (req,res)=>{
  const{id}=req.params;
  //* Here we are using filter, which filter the object and return every property which results in true and skip the property which are not true.
  //* The returning object will be the new object.
  comments=comments.filter(c=>c.id!==id);

  //* After deleting, lets redirect to /comments.
  res.redirect('/comments')
})