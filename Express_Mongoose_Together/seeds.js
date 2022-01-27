//* creating the seeds file for the initial data for our db, because it will get harder to work with db if we have no data.

const mongoose=require('mongoose');
//* need to require the model which we exported in product.js
const Product=require('./models/product')

//* The reason for connecting with mongoose is that it will run on it owns, and when ever we need new data. THis is very common to see, when we building it.
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch(err=>{
    console.log("Oh no Mongo connection failed");
    console.log(err);
})


// const p=new Product({
//     name:'Grapefruit',
//     price:11,
//     category:'fruit'
// })

// p.save()
//     .then(p=>{
//         console.log(p);
// })
// .catch(err=>{
//     console.log("Error on Saving");
//     console.log(err);
// })

//* lets insert a bunch of products, We have two options to insert. The first one is shown above.
//* let see the second method, we can use insertMany of mongoose. Where we can insert a bunch of products at once, but do remeber if its fail to save, then no products will be saved. 
//* need to uncomment the new product because it has been saved in the db.

const seedProducts=[
    {
        name:'Orange',
        price: 1,
        category: 'fruit'
    },
    {
        name: "Melon",
        price: 2,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price:3.99,
        category:'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category:'vegetable'
    },{
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})