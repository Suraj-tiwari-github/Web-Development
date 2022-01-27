const express=require('express');
const app=express();
const path=require('path');
app.listen(3000);

//! Static assest.
app.use(express.static(path.join(__dirname, "app.css")));
    //! public is a directory name where css and js file are going to save.
    






//! requiring data.json file here.
const redditData=require('./data.json');

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.set("view engine", 'ejs');

app.set('views',path.join(__dirname, '/views'));
app.use(express.static('public'))

app.get('/rand', (req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    res.render('random.ejs',{ num })
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit}=req.params;
    const data=redditData[subreddit];
    //* redditdata is a file which contain a object called soccer, and subreddit=req.params, in the url, we are requiring params which will contains soccer. so we are taking soccer object and printing it.
    console.log(data);
    if(data)
        res.render('subreddit.ejs',{...data});
    else
        res.render('notfound',{subreddit});

    
})


