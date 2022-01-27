//* This is a constrctor topic in js.

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
    console.log(this);
    //* we are calling this on a function, earlier we used to call it in object context.
    //* lets see what is going to print on the console
}

Color.prototype.rgb=function(){
    //* If we are adding methods to the Color which is a constructor, then we need to add the methods to the prototype to make it as an object.
    //* If we are directly adding the property of Color object, then it will be called as method on its own object. 

    //* Rather than defining on each object, we have defined it on prototype.
    const{r,g,b}=this;
    return `rgb(${r},${g},${b})`;
};

const color1=new Color(40,50,60);