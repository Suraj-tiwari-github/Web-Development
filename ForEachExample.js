//! For-each example.

const numbers=[1,2,3,4,5,6,7,8,9,10,11,12, 13]

numbers.forEach(function (el){
    console.log(el)
})
//* for each element will call and pass the argument to the anonoymous function and it will print each values from an array.

//* below is the for of loop.
for(let ele of numbers){
    console.log(ele)
}

console.log("Only even numbers\n")

numbers.forEach(function (el){
    if(el%2===0){
        console.log(el) 
    }
})

movies=[
    {
        title: 'Kaho na pyaar hai',
        score:99
    },
    {
        title:'mimi',
        score:99
    },
    {
        title:'Avengers End game',
        score:98,
    },
    {
        title:'BajiRao Mastani',
        score:100
    }
]

//* we have to print the title and score in this order.
//* title: movie name
//* score: 00/100.

//* so we are going to use forEach wih function and template literal.

movies.forEach(function(movie){
    console.log(`Title: ${movie.title} Score: ${movie.score}/100`)
})