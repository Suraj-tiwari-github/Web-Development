const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("Connection Open");
})
.catch(err=>{
    console.log("Oh no Error!!!");
    console.log(err);
})

const personSchema=new mongoose.Schema({
    first: String,
    last: String,
})
    
personSchema.virtual('fullName').get(function (){
    //* get is a getter.
    return `${this.first} ${this.last}`;
    //* by using fullName now it will behaves as a property with
    //* first and last name. 
})


//! Middleware pre and post.
personSchema.pre('save',async function(){
    this.first="Yo Mama";
    console.log("About to save mama");
    //* The above code will execute just before save. 
})
personSchema.post('save', async function(){
    console.log("just saved");
})
const Person=mongoose.model("Person", personSchema);