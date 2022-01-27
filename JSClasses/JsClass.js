class Color{

    //* In java script constructor don't goes with the name of our class, We have directly name constructor().
    constructor(r,g,b, name){
        console.log("Inside constructor");
        console.log(r,g,b);
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;

    }
    sayHello(){
        console.log(`Hello from Color`); 
    }
}

const c1=new Color(255,64,23, "tomato");