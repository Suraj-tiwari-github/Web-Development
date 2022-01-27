//!Step 1: Require the express join the path. Create a basic route with index and views for ejs.
//! Step 2: Create a Model directory and start with what type of data we need with mongoose and exprots that module.
//! Step 3: Creating a seed data, inserting a bulk data. inserting a fake data to work on it. The Directory is seeds under yelpcampground
//! step 4: Implemented a full CRUD routes by using method-override and ejs templates.
//! Step 5:
    //? install ejs-mate for boilerplate templates. npm i ejs-mate.


const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const campground=require('./models/campground');
//! requring method-override to implement edit, update and delete.
const methodOverride=require('method-override');
const { application } = require('express');
//! requing ejs-mate.
const ejsMate=require('ejs-mate');





mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(()=>{
    console.log("database connected")
})
.catch(err=>(console.log("Error with Data base")));

//! we are telling to express that we are using ejs-mate by using app.engine 
app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//! for the HTML post to have different http verbs.
app.use(express.urlencoded({extended: true}))



//! we can use any string, like _method, we can use method, or suraj, anystringis allowed.
app.use(methodOverride('_method'));



//?==================
    //!Routes
//? ==================
app.get('/', (req,res)=>{
    // res.send("Hello from Yelp Camp");
    res.render('home')//* views folder home.ejs
})

//! Index route.
app.get('/campgrounds', async(req,res)=>{
    const campgrounds=await campground.find({});
    res.render('campgrounds/index', {campgrounds});
})

//* inserting a data for checking the things how works for the project.
// app.get('/makecampground',async(req,res)=>{
//     const camp=new campground({title:'My Backyard',description:'Cheap Camping!!'})
//     await camp.save();
//     res.send(camp)
// })


//! new and create route.
app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
})
app.post('/campgrounds', async(req,res)=>{
    const campgrounds=new campground(req.body.campground);
    await campgrounds.save();
    res.redirect(`/campgrounds/${campgrounds._id}`);
})

//! Show Route.
app.get('/campgrounds/:id', async(req,res)=>{
    const campgrounds=await campground.findById(req.params.id);
    res.render('campgrounds/show', {campgrounds});
})

//! update Route.
app.get('/campgrounds/:id/edit', async(req,res)=>{
    const campgrounds=await campground.findById(req.params.id);//* to prepulate the campground to better editing and updating.
    
    res.render('campgrounds/edit', {campgrounds});
})
app.put('/campgrounds/:id', async(req,res)=>{
    const {id}=req.params;
    const campgrounds=await campground.findByIdAndUpdate(id,{...req.body.campgrounds});//!here campgrounds is an object we are using js spread (...) which spread the title, location and pass it to findByIdAndUpdate.
    res.redirect(`/campgrounds/${campgrounds._id}`);
})



//! delete Route.
app.delete('/campgrounds/:id', async(req,res)=>{
    const {id}=req.params;
    await campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})
app.listen(3000, ()=>{
    console.log("Serving on 3000");
})