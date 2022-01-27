

const tweetForm=document.querySelector('#tweetForm')
const tweetContainer = document.querySelector("#tweets");

tweetForm.addEventListener('submit', function(e){
  // !Let prevent the default mechanism here.
  e.preventDefault();
  //! e is a event object.
  
    //! here the ul element has a id of tweets and we are selecting that ul and at later stage we'are going to append it.
    


  //* let take a username and his tweet and print that commnet in the same page, no reloading just updating.

  //* here we are selecting each individual input element from the form but there is also a better when where javascript returns a collection of elements a form contains.
//   const usernameInput = document.querySelectorAll("input")[0];
//   const tweetInput = document.querySelectorAll("input")[1];
//   console.log(usernameInput.value, tweetInput.value);

  //* let's work with elements collection.
  const username = tweetForm.elements.username;
  const tweet = tweetForm.elements.tweet;
    addTweet(username.value,tweet.value);
    username.value='';
    tweet.value='';
  
});

const addTweet=(username, tweet)=>{
    const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetContainer.append(newTweet);
  console.log("SUMBIT");
}

tweetContainer.addEventListener('click', function(e){
  console.log("Click on Ul")
  console.log(e);
  e.target.remove();//* in this we can remove a li, where a user has just click on it.
  //* we do have an another method of doing it 

  //* every target gives the node name which is the element name of our html. and we can use that to remove precisely.

  e.target.nodeName=== 'LI' && e.target.remove();
  //* AND operator works only when both the yields true result.
  //* when target. nodeName is equal to li, then only the next condition will be checked.
  //* If the first condition is true, then automatically the second will get executes and return the result as true.

})