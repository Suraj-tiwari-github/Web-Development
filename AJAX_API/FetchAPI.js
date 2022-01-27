fetch("https://api.cryptonator.com/api/full/btc-usd")

//* Fetch gives us a promise has promise status, where as resolved, rejected, pending. 

.then(res=>{
    console.log("Response, WAITING TO PARSE", res);
    return res.json();

})
.then(data=>{
    console.log("Data Parsed", data)
    //* now we got the object so, lets take the data what we want.
    console.log(data.ticker.price)
    //* Now we got the data what we want. 
})
.catch(err=>{
    console.log("Error", err);
})

//* res will contain the Response Object. But not the data which we want, we want the JSON object. 