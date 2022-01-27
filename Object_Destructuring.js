const user={
    email:'surajtiwari1155@gmail.com',
    password:"12345678",
    firstName:'suraj',
    lastName:'Tiwari',
    born:1999,
    isDead:false,
    bio:'Suraj Tiwari is a Computer Science Graduate from the year 2021. It clear it Intermediate in year 2018, and school in 2015.',
    city:'Hyderabad',
    state:'Telangana'
}

//* suppose we have a property from the user like his bio, then how can we access it, simple
const userBio=user.bio;

//! It is good, but we have to remove 100s of property from 1000's of object, then it would take so much of time.

//! the solution to the above problem is , we can use the name of the property of object to create a variable.

const {email, firstName,lastName}=user;

//* the above line, from user object, their are property likes email, firstName ..., we have created the variables same like the property of user object. 

//! now we can access the email firstName just like variables.

console.log(email);
console.log(firstName);
console.log(lastName);

//! Suppose we want our own naming variables for the above property of user object, we can also create our own Named variables for email password or any other property of the object.

const {born:birthYear}=user;

//!Now instead of born we can also called as birthYear and birthYear will the values of user.born.

console.log(birthYear);

function fullName(user){
    return user.bio;
}

function fullName1(user){
    const {firstName, lastName}=user;
    return `${firstName} ${lastName}`
}

function fullName3({firstName, lastName='Tiwari ji '}){
    //! While calling when we pass the user to it, under arguments directly taking the property such as firstName and the lastName from the user object. 
    //? Note : We need to take the property in the curly braces.
    return `${firstName} ${lastName}`
}

