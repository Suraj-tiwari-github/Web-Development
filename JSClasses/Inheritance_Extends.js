class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("In Pet constructor");
  }
  eat() {
    return `${this.name} is Eating`;
  }
}

class Cat extends Pet{
    constructor(name, age, livesLeft){
        console.log("In the starting of cat constructor")
        super(name, age);
        this.livesLeft=livesLeft;
        console.log("In the end of cat constructor");
    }
    meow(){
        return "meeooowwww";
    }
}

class Dog extends Pet{
    

    bark(){
        return "wooof";
    }
}