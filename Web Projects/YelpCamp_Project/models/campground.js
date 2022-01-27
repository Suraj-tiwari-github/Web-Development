const mongoose=require('mongoose');
const Schema=mongoose.Schema; //* In order to avoid rewriting mongoose.schema every where we are storing it in a variable.

const campgroundSchema=new Schema({
    title: String,
    image:String,
    price: Number,
    description: String,
    location: String
});

module.exports=mongoose.model('Campground', campgroundSchema); //* rule of singular to plural for model name which campgropund