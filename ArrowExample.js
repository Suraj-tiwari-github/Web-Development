movies = [
  {
    title: "Kaho na pyaar hai",
    score: 99,
  },
  {
    title: "mimi",
    score: 99,
  },
  {
    title: "Avengers End game",
    score: 98,
  },
  {
    title: "BajiRao Mastani",
    score: 100,
  },
];

//* Arrow fucntion to do the same thing as of map, arrow functions are shorter. that's it.

const add=function(x,y){
    return x+y;
}

const newAdd=(x,y)=>{
    return x+y;
}

const square=(x)=>{
    return x*x;
}

const rollDie=()=>{
    return Math.floor(Math.random()*6)+1;
}

const implicitRollDie=() => (Math.floor(Math.random()*6)+1)

newAdd=(a,b)=>a+b

// const newMovies=movies.map(function (movie){
//   return `${movie.title} = ${movie.score/10}`
// })

const newMoves=movies.map((movie)=>(`${movie.title}- ${movie.score/10}`))