// const {PI, square}=require('./math');
// //* here we are taking the file math.js into our app.js file by using the keywoard require

// console.log(PI);
// console.log(square(9))



//* here we are going to require a directory which contains a file name index.js, Node will automatically require index.js file by itself. It is a default mechanism. 

const TiwariHome=require('./MyHome')
console.log(TiwariHome);

//* when we run this app.js which is requiring a directory called MyHome, which contains the file index.js-> where index.js exports all the files which are present in it.