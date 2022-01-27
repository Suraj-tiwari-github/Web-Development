
// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
// },1000)
// // document.body.style.backgroundColor='orange';

// setTimeout(()=>{
//     document.body.style.backgroundColor='orange';
// },2000)

// setTimeout(()=>{
//     document.body.style.backgroundColor='yellow';
// },3000) 


// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   //*In the second line of first setTimeout Function. 
//   //* First execution will happened for the first setTimeout function, then the second and at last the third.
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     //* In the second line of Second setTimeout Function.
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//     }, 1000); 
//   }, 1000);
// }, 1000);

// const delayedColorChange=(newColor, delay, doNext)=>{
//     //* assigning a call back function to delayedColorChange
//     setTimeout(()=>{
//         document.body.style.backgroundColor=newColor;
//         //* here doNext is a callBack which we are going to call after we change the color.
//         doNext() && doNext(); //* while calling delayedColorChange, we're are going to perform the call back nesting. 
//         //* reason why doNext is And with Another doNext(), to avoid getting undefined while calling, it for the last callback.

//     },delay)
// }

// delayedColorChange('red', 1000, ()=>{
//     //* A call back is made while calling the delayedColorChange.
//     delayedColorChange('orange', 1000, ()=>{
//         //* A Second callBack while calling a first Callback.
//         //* Order of execution will be done in sequentially manner.
//         delayedColorChange('yellow', 1000, ()=>{
//             delayedColorChange('blue', 1000, ()=>{
//                 //* first the color red will get executed.
//                 //* second orange.
//                 //* yellow third.
//                 //* blue fourth.

//                 //!This is why callbacks are used when something need to be done after a particular thing has happened , we keep on nesting to get that result, and callbacks in this way are supper common. 
//             })
//         })
//     })
// })



//* making a request to get some information from amazon API.
//* sometimes its work and sometimes it's not, we need to deal with success and failure.
//* we are going to pass the 2 callbacks for each request, one is for the success callback and another is for the failure callback.
//* If the success request works, and we want to do something init, then again we need to nest inside of a success callback an another callback for what we need to do. 


// const fakeRequestCallback= (url, success, failure) =>{
//     const delay=Math.floor(Math.random()*4500)+500;
//     setTimeout(()=>{
//         //* This is the first call back.
//         if(delay>4000){
//             // * If the delay which we get from the random number is greathan than 4k then.
//             failure('connection Timeout :(')
//         }
//         else{
//             success(`Here is your Fake Data from ${url}`)
//         }
//     }, delay) //* ending of setTimeout, we are calling delay
// }

// fakeRequestCallback('boosk.url', function(response){
//     //* This is the callback function for success
//     console.log('It Worked') 
//     console.log(response)

//         //! imaging that we got a success response, then we need to execute an another request for example to an another page, then that result in success, then do make anthoer request. 
//         fakeRequestCallback('books.com/page1',
//             function(response){
//             //! success response for the first page.
//             console.log("It worked Again 2nd time")
//             console.log(response);
//             fakeRequestCallback('books.com/page2',
//                 function(response){
//                     //* third success request.
//                     console.log( "It Worked",response);
//                 },
//                 function (err){
//                     //* third error message.
//                     console.log("Error!!!", err)
//                 })
//             },
//             function(err){
//             //! The first one might have worked , but the second request on page1 result in failure, then
//             console.log("Error!!!",err)
//         })
// }, function(err){
//     //* this is the callback function for failure
//     console.log("Error!!!")
//     console.log(err)
// })


const fakeRequestPromise=(url)=>{
    //* need to passs only the url to fakeRequestPromise
    //* it's returns Promise Object, which contains a Promise status: which will contains resolved, rejected, pending.
    return new Promise((resolve, reject)=>{

        const delay=Math.floor(Math.random()* (4500))+500;
        setTimeout(()=>{
            if(delay>4000){
                reject ('Connection Timeout :(')
            } else{
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(()=>{
        //! then is for the success status: resolved.
        console.log("It worked Promise : Resolved")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(()=>{
                console.log("It worked Promise : Resolved(2)");
                fakeRequestPromise('yelp.com/api/coffee/page3').then(()=>{
                        console.log("It worked Promise: Resolved(3)")
                }).catch(()=>{
                        console.log("Oh No, Error!!!! Promise: Rejected(2)")
                })
            })
            .catch(()=>{
            console.log("Oh No, Error!!!! Promise: Rejected(2)");
            })
    }).catch(()=>{
        //! If the request result in failure, then catch will get executes, the promise status code for  request failure is rejected 
        console.log("Oh No, Error!!!! Promise: Rejected(1)")
    })

