// async function hello(){
//     //* it will return a Promise object when we called it in the console.
// }

// const sing=async()=>{
//     throw new Error("Oh NO.")
//     return "LA LA LA"
//     //* It will return the promise object, but with value lalala.
//     //* A promise is made for us then return to us.
// }

// sing().then((data)=>{
//     console.log("Promise resolved with:", data)
// })
// .catch((err)=>{
//     //* we can catch the error thrown by using the keyword throw.
//     console.log("Oh No, promise rejected");
//     console.log(err);
// })

// const login=async(username, password)=>{
//     if(!username|| !password) throw "Missing Credentials." //* username and password should be filled, if left empty then the error will be thrown.
//     if(password==='corgigeetarecute') return 'WELCOME!!'
//     throw "Invalid Password"
// }

// login('afda;dsf', 'adfa;sdf')
//     .then(msg=>{
//         console.log("Logged In!!")
//         console.log(msg)
//     })
//     .catch(err=>{
//         console.log("Error!!")
//         console.log(err)
//     })

const fakeRequest=(url)=>{
    return new Promise((resolve, reject)=>{
        const delay=Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay>4000){
                reject("Connection Timeout :(");
            
            }
            else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
};

async function makeTwoRequest(){
    let data1=await fakeRequest('/page1');
    console.log(data1);
}