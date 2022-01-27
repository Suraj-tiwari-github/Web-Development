//! npm i morgan to install morgan middleware.

const express=require('express');
const app=express();
//! require morgan.
const morgan=require('morgan');




//! app.use(()=>{ console.log("Heyy")} ) 
//?This will work for every incoming request, app.use will run every time we received a request. we can call it a middleware, because it is running on every incoming middleware.

//! app.use(express.json(*)) 
//? this is telling that parse the incoming body as a json on every request.

//!app.use(express.urlencoded())
//? We are telling that every request, should use urlencoded function, as it returns a function.

//!The whole point it that in order to use morgan as a middleware we need to tell app.use()

app.use(
    //!using a predefined format string , this is what it says on the docs.
    morgan('dev')
    //!morgan('dev') // we can use this too
    //! morgan('common') // this too.
);

const verifyPassword=(req,res,next)=>{
    const {password}=req.query;
    if(password==='surajtiwari'){
        next();
    }
    res.send('Sorry You need a password');
}

app.use((req,res,next)=>{
    req.requestTime=Date.now();
    console.log(req.method, req.path);
    next();
})
app.use('/dogs', (req,res,next)=>{
    console.log("I Love Dogs");
    next();
})

app.get('/secret', verifyPassword,(req,res)=>{
    res.send("This is my Secret");
})

app.get('/', (req,res)=>{
    console.log(`Request Date: ${req.requestTime}`)
    res.send("Home Page");
})
app.get("/dogs", (req, res) => {
  res.send("Woof QWoof");
});

app.use((req,res)=>{
    res.status(404).send('NOT FOUND');
})

app.listen(3000, ()=>{
    console.log("App is running on Local Host: 3000")
})