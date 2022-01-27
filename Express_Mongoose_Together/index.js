const express=require('express');
const { Mongoose } = require('mongoose');
const app=express();

const path=require('path');

const mongoose=require('mongoose');
//* using the HTTP verb called Method-override.
const methodOverride=require('method-override');


//* lets require the model of product which we have exported in product.js file.
const Product=require('./models/product');
const { urlencoded } = require('express');

//* Connecting with mongoose.
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("Mongo Connection Open");
    //* Creating a separate directory for the model because we need to make thing managable.
})
.catch(err=>{
    console.log("Oh No Mongo errro!!1");
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//! we need to tell express that we are sending the form in method=post.
app.use(express.urlencoded({extended:true}))
//! Telling express that we are using methodOverride for HMTL form http verb. put,patch.
app.use(methodOverride("_method"));

const categories=['fruit','vegetable', 'dairy']

//* adding a get route.
app.get('/products', async(req,res)=>{
    const products=await(Product.find({})) //* product.find() is a mongoose code, its takes time to complete, So we are awaiting it.
    //* we usually await the mongoose code. It is a good practice in general.
    console.log(products);
    res.render("products/index", {products}); //* created a directory inside of views called products. 
})

//* adding a new route for create.
//! Create Route
app.get('/products/new', (req,res)=>{
    res.render('products/new', {categories});
})

//!Sumbit route of create.
app.post('/products', async (req,res)=>{
    console.log(req.body); //* it will print in our console.
    const p1=new Product(req.body);
    await p1.save();
    console.log(p1);
    //* After saving we should redirect to show route, because the user have to see that his new product has inserted. 
    // res.send('Making your product')//* for the user this message will be dispalyed.
    res.redirect(`/products/${p1._id}`)
})

//* It will be the show route, here we take mongoose id.
//! Read Route.
app.get('/products/:id', async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id)
    console.log(product);
    // res.send("details page")//* for the confirmation.
    res.render("products/show", {product})
})


//!update Route.
//! Note: Put and Patch request are the request which are responsible for changing the states. PUT will change and override completing with the new field.
//! Patch will change just the portion of it document.
app.get('/products/:id/edit', async (req,res)=>{
    const {id}=req.params;
    const product= await Product.findById(id);
    res.render('products/edit', {product, categories})
})

//! Update Route Form Send with PUT request.
app.put('/products/:id', async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndUpdate(id,req.body, {runValidators: true});
    console.log(req.body);
    // res.send("PUT!!")

    res.redirect(`/products/${product._id}`); //! We can use id variable but their is a problem is product has not modified the field, then we are displaying the same, Product.findByIDAndUpdate will take time and we need to await and then display the product._id because if it run, then it will display the correct filed. 
})

//! Delete route.
app.delete('/products/:id', async(req,res)=>{
    const {id}=req.params;
    const deletedProduct=await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
}) 