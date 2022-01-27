const fakeRequest=(url)=>{
    //! To create Our own Promises, just write new Promise. it takes two parameter usually named resolve, reject but we are allowed to name what we want, they are just parameter.
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
            reject("Request Error!!");
        },1000)
    })
}

fakeRequest('/dogs/1')
    .then((data)=>{
        console.log("DONE WITH REQUEST")
        console.log('data is:', data)
    })
    .catch((err)=>{
        console.log("Oh NO!! ", err)
    })