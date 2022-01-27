// setTimeout(() =>{
//      console.log("Hello!!!!")
// }, 3000)

//* SetTimeout will automatically get executed when we refresh a page
//* setTimout function takes 2 parameter, the first parameter is what we want to execute and the 2nd parameter specify the delay to executes the first parameter. 

// console.log("Hello!!!")
// setTimeout(()=>{
//     console.log("... are you still there?")
// }, 3000)

// console.log("GOODBYE!!");

//! The order of execution from the line 8 will executes in this manner.
//! hello will be printed for the line 8.
//! as the time we set is for 3 seconds, it that time
//! line 13 will get executed, after 3 seconds line 10 will executes.


//! Now setInterval:
    //* setInterval() will executes at every interval given in the parameter of it. until the clearInterval() is not been called.

const id=setInterval(()=>{console.log(Math.random())},2000);

//* to stop the setInterval to keep on running, we use clearInterval(),
//* how clearInterval() works is setInterval return an id, every setInterval is assign an id if there are more setInterval , they do have different id's. to stop the setInteval see below.

//! call clearInterval(id) in the console of browser.
//* ctrl+shift+c.
