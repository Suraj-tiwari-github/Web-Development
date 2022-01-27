//* Map return a new Array. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//* lets return every element by making them double.

const numDoubles=numbers.map(function (num){
    return num*2;
})

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

//* from Movies array we'll extract the title only and store them into the array.

const title=movies.map(function(movie){
    return movie.title;
})