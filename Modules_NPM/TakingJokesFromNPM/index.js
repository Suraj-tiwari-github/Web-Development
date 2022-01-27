//* we have created a file in the directory where install the package 
//* and we need to require the joke.

const jokes=require("give-me-a-joke");
//* lets make the text in rainbow by using a package named colors.

const col=require('colors');

//* we just need to provide the package name, doesn't have to say the path of the directory
//* it will look after it.

// console.log(jokes);

jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
    console.log(joke.trap);
    console.log(joke.green);
    console.log(joke.inverse);
    console.log(joke.underline.red);
   

})

// jokes.getCustomJoke(function(di){
//     console.log(di);
// })