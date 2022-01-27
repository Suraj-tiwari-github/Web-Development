const person={
    firstName:'suraj',
    lastName:'Tiwari',
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    fullName1: () => {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
        //* here we'll get an undefined undefined
    },

    shoutName: function(){
        setTimeout(()=>{
            console.log(this)
            console.log(this.fullName())
        },3000)
    }
}

//!The keyword 'this' behaves differently in arrow function compared to a regular function, Inside a function we can have a subfunction that uses a arrow function, but a arrow function cannot use this directly.
//! This is not a definition it is just what i understood, Need to learn because colt steele says will see this later.