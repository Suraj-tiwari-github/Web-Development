const nums=[9,8,7,6,5,4,3,2,1]

const odds=nums.filter(n=>{
    return n%2===1
})

const smallNums=nums.filter(n=>{
    return n<=5
})

movies = [
  {
    title: "Kaho na pyaar hai",
    score: 99,
    year:1990
  },
  {
    title: "mimi",
    score: 99,
    year:2021
  },
  {
    title: "Avengers End game",
    score: 98,
    year:2020
  },
  {
    title: "BajiRao Mastani",
    score: 100,
    year:2018
  },
  {
      title:"chehra",
      score:60,
      year:2021
  },
{
    title:'joker',
    score:50,
    year:2016
}

];

const goodMovies=movies.filter(n=>{
    return n.score>90
})

const badMovies=movies.filter(n=>(n.score<=60))

const movieYear=movies.filter(n=>n.year)

const recentMovies=movies.filter(n=>n.year>=2018)
const goodTitles=goodMovies.map(m=>m.title)

//!The above line 53,54 those two lines can be break down to single line as shown in the line 57.
moives.filter(m=>m.score>80).map(m=>m.title)
