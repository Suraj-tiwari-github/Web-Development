let maximum=parseInt(prompt("Enter the maximum Number!"))

while(!maximum){
    // If true enter anything other than numbers. 
    maximum=parseInt(prompt("Enter a valid Number"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;

let guess=parseInt(prompt("Enter your first Guess!"))
let attempts=1;

while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;

    if(guess>targetNum){
        guess=prompt("Too High, Enter a new Guesss:");
    }
    else{
        guess=prompt("Too low, Enter a new Guess:");
    }
}

if(guess==='q'){
    console.log("Ok, YOU QUIT!!");
}
else{
    console.log(`You Got it Right in ${attempts} guesses`);
}