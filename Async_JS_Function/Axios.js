  axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then((res) => {
      console.log(res.data.ticker.price);
    })
    .catch(err => {
      console.log("Error!!!", err);
    })

const fetchBitCoinPrice=async()=>{
    try{
        const res=await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
        console.log(res.data.ticker.price)
    }catch(e){
        console.log("SsSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
    }
}
const jokes=document.querySelector('#jokes');  
const button=document.querySelector('button');

//* Here we are going to get a joke from the API, called webiste, we are going to display just the joke and their will be button to change the joke.

const getDadJoke=async()=>{
    const config={headers:{Accept:'application/json'}}
    //* Headers is an object , under Headers we have Accept, that accept field required the application/json, which will return json parsed data in returned.

    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    
}

const addNewJoke=async()=>{
    const jokeText=await getDadJoke();
    const newLi = document.createElement("Li");
    newLi.append(jokeText);
    jokes.append(newLi);
    
}


button.addEventListener("click", addNewJoke);


//* here we are going to select the form in our hmtl by using queryselector.

const search=document.querySelector("#SearchShow");

search.addEventListener('submit',  async function(e){
    e.preventDefault();
    console.log("Submitted"); 

    //* Lets take the values which user has enter in to the input type in th form by using elements. query is the name which we have given to input type in the form .
    const searchTerm=search.elements.query.value;

    //* Multiple time we a user search for a paritcular thing, He will write a bunch of string, in order to search for all string, do have a special method given to use by Axios called.
    //! {params:  q: user search string}

    const config={params: {q: searchTerm}, headers: {}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    //* what ever the user has search, we are saving that string and calling the api for that search term.




    displayImages(res.data);
    //* now we need to empty the element which we search in the form input 

    search.elements.query.value='';
    document.body.remove(document.querySelectorAll("img"));
    
})


const displayImages=(shows)=>{
    //* Shows is a property in given by the API, under Shows, we have a image, where image property is medium (which means medium image)
    //* We need to take that and display to the user.

    for(let result of shows){
        if(result.show.image){
            //* Because shows has fewer properties of medium, some search result do contain it, other won't.
            const img=document.createElement("IMG");
            img.src=result.show.image.medium;
            document.body.append(img);
        }
    }
    removeImages(res.data);
}

const removeImages=()=>{
    img=document.querySelectorAll("img");
    document.body.removeChild(img);
    
}