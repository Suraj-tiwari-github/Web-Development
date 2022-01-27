document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt);
    //* here evt stands for evt where we can take any name, Just for the sake of simplicity we've taken evt. Evt is not created by us, it is automatically created by JS, and evt is a object which listen what event has occured, whether a keyboard event or the mouse event. 

    //* when we click on the button it is called as 
    // ! MouseEvent

    //!Event object is necessary to learn because it order to know especially in the case of keyboard event, When a key is pressed, what event we want to run it for.
    //! Take a example of a game where keyword W<A<S<D is used to navigate a character in the game around. 
    //! In that way, Keyboard event object.  is important. 
    // alert('click')
})

// document.querySelector('input').addEventListener('keydown', function(){
//     console.log("KEYDOWN IS PRESSED");

//     //* we do have a event called keydown and keyup, keydown indicate that a character is pressed on the keyboard. It is called as Keydown.

//     //* when we release the key after pressing it will count it as a keyup.


// })

// document.querySelector("input").addEventListener("keydown",function(e){
//     //* We are taking a Keyboard Event Object: what it does is, what ever the key is pressed on the keyboard it will return that event as a object. Under that keyboard Event Object it need only two properties called 
//     //! key and code. 

//     // console.log(e.key); //* when pressed character 'A' it will print A.
//     // console.log(e.code); //* when pressed Character 'A' it will print KeyA.
// })


//! When we want to listen the event globally, But not on the object, then we can use the window object. Because no matter where a key is pressed when use a global object which is window, it will listen to key pressed.

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("Up!")
            break;
        case 'ArrowDown':
            console.log("Down!!");
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log("RIGHT!!");
            break;
        default:
            console.log("IGNORED!")
    }
})