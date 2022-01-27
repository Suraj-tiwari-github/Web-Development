// console.log("aur miya shuru kardiya javascirpt Haao Fir, Baigan");
// let total=1+5;
// console.log(total);

//! decision making

// let rating=5;

// if(rating===3){
//     console.log("You are a superStar !");
// }
// else if(rating===2){
//     console.log("Meets expectations");
// }
// else {
//     console.log(" Ok fine");
// }

// let password='taco tuesdaydog';
// if(password.length>=6 || password.indexOf(' ')===-1){
//     if(password.indexOf(' ')!==-1){
//         console.log("Password cannot include spaces");
//     }
//     else{
//         console.log("Valid Password");
//     }
// }
// else{
//     console.log("password too short!!!");
// }

//! creating array in JavaScript.


let student=[]; // this is a empty array.

//An array of String.
let colors=['red', 'green', 'yellow', 'cyan'];

// an array of numbers.
let num=[10,20,30,40,50];

//! Javascirpt supports mixed array.
// let stuff=[true, 68, 'cat', null];

// console.log(colors.length);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// colors[4]='red';

// console.log(colors[4]);
// console.log(num);

// push= add an element to the end.
// pop= remove an element from the end.
// shift= remove an element from the start.
//unshift=add to start.

// let movieLine=['tom', 'nancy'];

// movieLine.push('suraj');

// console.log(movieLine);

// console.log(movieLine.pop());
// movieLine.shift();
// console.log(movieLine);

// movieLine.unshift("suraj", "gautam", "sanajana");
// console.log(movieLine);

// console.log("Combining the two array MovieLine, Colors");

// const array3=colors.concat(movieLine);

// console.log(array3);

// console.log(array3.includes("suraj")); 
// if suraj is their in array, return true or else false. 

// console.log(array3.join());
// //! expected Output: red,green,yellow,cyan,red.

// console.log(array3.join("")); //* no space will be given.
// //!expected output: redgreenyellowcyanred

// console.log(array3.join("-"));
// //!output: red-green-yellow-cyan-red.

// console.log(array3.join(", "));
// //!output: red, green, yellow, cyan.

// //! Nested Array in Javascript.

// const array1=[[1,2,3,4,5], [6,7,8,9,10], [11,12,13,]];

// console.log(array1);


// months.splice(1,0,'Feb'); //* add Feb at index 1 and delete 0.

// console.log(months);
// //! output: Array ['jan', 'Feb', 'March', 'Apirl', 'May']

// months.splice(5,1,'June'); //* Adding/replacing 1 elements at index 4
// console.log(months);

// let myFish=["Angel", "clown", "mandarin", "Sturgeon"];
// let removed=myFish.splice(2,0,"Drum"); 
// //! First parameter : index 2, 
// //! second parameter : delete value, 0.
// //! third parameter : add drum at index 2.

// removed=myFish.splice(2,0,'drum', 'guitar');
// console.log(myFish);

// removed=myFish.splice(3,1); //* Index 3, removed 1.
// //* removed one element at index 3.

// removed=myFish.splice(2,1,"trumpet");

// removed=myFish.splice(0,2,'parrot', 'blue', 'trumpet', 'sturgeon');

// removed=myFish.splice(-2,1); 

// // !creating an object.
// const person={firstName: "Suraj", lastName: "Tiwari", };

// console.log(person);

// const KitchenSink={
//     favNum: 343214,
//     isFunny: true,
//     color: ['red', 'green']
// }

// console.log(KitchenSink.color);

// console.log("Last Name: " +person["lastName"]);



//! javascipt loops.


// for loop : initial condition, ConditionalStatements , Increment/decrement. 
// for(let i=0; i<=9; i++){
//     console.log(i);
// } 

// for(let j=0; j<array3.length; j++){
//     console.log(j,array3[j]);
// }

// for(let k=array3.length-1; k>=0; k--){
//     console.log(k,array3[k])
// }

// const seatingChart=[['krsiten', 'Erik', 'Namita'],
// ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
// ['Yuma', 'Sakura', 'Jack', 'Erika']]

// for(let inner=0; inner<seatingChart.length; inner++){
//     const row=seatingChart[inner];
//     console.log(`    Row ${inner+1}`)
//     for(let outer=0; outer<row.length; outer++){
//         console.log(row[outer])
//     }
// }


// let count=10;
// while(count>0){
//     console.log(count);
//     count--;
   
// }

// let count=10;
// while(count>0){
//     console.log(count);
//     count--;
// }

// const secret='suraj';
// let guess=prompt("Enter the secret Code");
// while(guess!==secret){
//     guess=prompt("Enter the secret code... ")
// }

// console.log("Congrats you got the secret!!!")
// const months=['jan', 'March', 'April', 'may'];
// //! lets print an array mounth
// for(let i=0; i<months.length; i++){
//     // using String Template Literal.
//     console.log(`Visit reddit.com/r/${months[i]}`)
// }

// //! lets see the for of loop.

// for(let m of months){
//     console.log(m)
// }

// //! Two Dimensional Array.
// const D2=[
//     ['suraj','gautam', 'sanjana'],
//     ['suraj', 'faisal', 'khaja'],
//     ['suraj', 'rahul', 'sriver']
// ]

// for(let i of D2){
//     for(let j of i){
//         console.log(j)
//     }
// }

// //!creating an object 
// const testScores={
//     sachin:100,
//     kohil: 43,
//     dhoni: 12,
//     sanja_samson:1000,
//     raina:111,
//     rahul:111,
// }

// for(let person in testScores){
//     console.log(person);
// }
// //! getting an error testscores is not iterable.

// //! using Object.keys to get all the key values.
// Object.keys(testScores)

// Object.values(testScores)

// //! getting key and values together.
// Object.entries(testScores)

// console.log("Here we are")

// //! now lets find out the sum of testScores.
// let total=0;
// for(let score of Object.values(testScores)){
//     total+=score;
    
// }
//  console.log(total);

//  let scores=Object.values(testScores);
//  //! Object have no property called length. 
//  console.log("Average of TestScore is : " + total/scores.length)


//  //! Define a function.

// //! Their are multiple way to define the function. function.

// function grumpus(){
//     console.log("This is a function");
// }

// function greet(first){
//     console.log(`First Name: ${first}`);
// }

// function add(a,b){
//     return a+b;
// }
 
// function multiply(a,b){
    
//     function add(a, b) {
//       return a + b;
//     }

//     add(this.a, this.b);
// }

// function callhelp(){
//     heroes=['spiderman', 'captain america', 'thor']

//     function callinghelp(){
        
//         for(let hero of heroes){
//             console.log(`Calling ${hero}`)
//         }
//     }
//     callinghelp()
// }


let greet= function() {console.log("Hi")}

//! passing an function like an argument. 

function rollDie(){
    const roll=Math.floor(Math.random() *6) +1
    console.log(roll)
}

function callTenTimes(func){
    for(i=0; i<10; i++){
        func()
    }
}

callTenTimes(rollDie) //!while caling the function as an argument, don't give parenthesis, because we're not passing it like a function, we are passing it like an arguement.

//! A function is returning the function.
function makeMysteryFunc(){
    const rand=Math.random()
    if(rand>0.5){
        return function(){
            console.log("Congrats i'm a good function")
        }
    }
    else{
        return function(){
            alert("You have been infected by a computer virus")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
            alert("stop trying to close this window")
        }
    }
}

//* while calling it will return a function so we again have to all the method in which we are storing it. 

const MyMath={
    PI: 3.14159, //* normal key value pair.
    square: function(num){
        //* this is a method which is been placed as a property in an object.
        return num*num;
    },
    cube: function(num){
        //* this is also a method.
        return num**3;
    },

    rectangle(length, breadth){
        //* we have remove the colon (:) and the function.
        //* even this is also be method.
        return length*breadth;
    }
}

const cat={
    name: 'Blue steele',
    color: 'grey',
    breed:'scottish fold',
    papa: 'auspicious',
    meow(){
        console.log("Meow Meow Meow")
        // console.log(color); //* we'll get error on this line.
        //! Error name: color is not defined.. 

        //* to call it, we this keyboard.
        console.log(this.color);
        console.log(`${this.name}`)
    }
}

const meow2=cat.meow; //* setting a reference to a variable, in this case reference is a function 
//* now call using parenthesis.

//! Try-Catch.

try{
    hello.toUpperCase();
    //! Hello variable doesn't exist. and using with Uppercase result in error. 
}
catch{
    console.log('error');
}

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch(e){
        console.log(e);
        console.log("Please pass a string next time!")
    }
}
