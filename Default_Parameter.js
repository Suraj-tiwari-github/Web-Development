function rollDie(numSides){
    if(numSides===undefined){
        numSides=6;
    }
     return Math.floor(Math.random() * numSides)+1;
}
 
//* now default parameter, .

function rollDie1(numSides=6){
    return Math.floor(Math.random()* numSides)+1;
}

//* Default parameter should be placed at the end of all the normal argument, They need to come after any parameters that are not default. 

function greet(person, msg='Hey there', punc='!!!'){
    console.log(`${person} ${msg} ${punc}`)
}


const nums=[1,2,3,4,5,6,7,8,9,10]
Math.max(nums)
//* return Nan not a number. We need to pass it value by valye .
//* to do that we have to use spread.

console.log(Math.max(...nums))

//!copying two array by using spread 

const cats=['Blue','Scout', 'Rocket']
const dogs=['Rusty','wyatt']

const allpets=[...cats, ...dogs]

const obj={1:'hello', 2:'there'}
const obj2={3:'suraj', 4:'tiwari'}

const newObj={...obj,...obj2}

function raceResult(gold, silver, ...everyoneElse){
    console.log(`Goal Medal goes to: ${gold}`)
    console.log(`Silver Medal goes to: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
//* these are called Rest , will take all the remaining arguments in an acutal array. 
//* and we also learnt about argument object which will be there in every function and has a property called length. It contains all the arguments passed to an function, Not available inside an arrow function.



//!Now we are going to see the array destructuring. 

// A short, clean syntax to unpack: values from arrays properties from the object into the distinct values.

const scores=[12345,565645,124234,234234,23423423,323456,678967]

//* we have the scores[0] to be called as first position or gold winner.
//* sames goes with second and third and everyone else.

const[gold,silver,bronze, ...everyone]=scores;
//* here we have uses a rest operator.

