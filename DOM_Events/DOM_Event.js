const btn=document.querySelector('#v2');

btn.onclick=function(){
    console.log("You clicked me version 2");
    console.log("I Hope it will worked");
}

//* Instead of writing Javascript in the inline html, we have wrote it in the separate script. 

//* we are attaching the function as a property to the doucment object where a property called onmouseenter, which is just like a hover, when we take the mouse cursor over the button, the scream function will get executed. 
function scream(){
    console.log("AAAAHHHHH");
    console.log("Stop Touching me!!!");
}

btn.onmouseenter=scream;


//!Version 3. addEventListener.
const btn3=document.querySelector('#v3');
btn3.addEventListener('dblclick', function(){
    alert("Clicked!!")
})

//* event listener is attached to the button, we don't have to run this event listener, it will automatically invocked when we pressed the button 3. as in the first parameter, we wrote a event called click.
//* In the second argument, The function will get executes when a click method is invoked.

//!For Double click we have dblclick.
btn3.addEventListener('dblclick', function(){
    alert("You double Clicked.")
})

function twist(){
    console.log("Twist")
}

function shout() {
  console.log("shout");
}

const s=document.querySelector("#event");
s.addEventListener('click', twist, { once: true})
s.addEventListener('click',shout);

//* We have wrote options like as an object in the eventListener.
//* The function will only run for once on twist function and it will be removed from the document.
//* shout function will automatically called when we click on the button.