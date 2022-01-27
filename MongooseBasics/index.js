const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/moviesApp")//* copied this line from the docs.
.then(()=>{
    console.log("Connection Open")
})
.catch(err=>{
    console.log("Oh no Error!!!")
    console.log(err);
})

const movieSchema=new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

//* To create a model, we need this line.
const Movie=mongoose.model('Movie', movieSchema); //* Movie is a name of the model, The important rule for Movie( name of the model) is singular and first letter should be Captial here M is capital. Mongoose will return a collection called movies( turn model name to plural)
//* it will pluralise it. and make the first letter as small like movies.

const matrixMovie=new Movie({title: "The Matrix", year: 1999, score:9, rating: 9.0})

//! we are running this file by using node.
//! write node and press enter, we are  inside of node REPL.
//! after that write .load index.js (it will load the file)

//! To save the matrixMovie, write in node, matrixMovie.save().
//! Then open the mongo shell, see the data base with db.movies.find()

Movie.insertMany(
    {title:"Bajirao Mastani", year: 2015, score:9},
    {title:"padmavati", year: 2019, score: 8},
    {title: "Kick", year: 2015, score: 8},
    {title:"Ranjhana", year: 2014, score: 7}
)
.then(data=>{
    console.log("It worked");
    console.log(data);
})
