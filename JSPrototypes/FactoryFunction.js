function hex(r,g,b){
    return 
}

function rgb(r,g,b){
    return `rgb(${r},${g},${b})`;
}

function makeColor(r,g,b){
    const color={};//* here we have created an object of color.
    color.r=r;
    color.g=g;
    color.b=b;

    color.rgb=function(){
        const {r,g,b}=this;//* here we have destructed rgb.
        return `rgb(${r},${g},${b})`;
    }

    color.hex=function(){
        const{r,g,b}=this;
        return ('#' +((1<<24) + (r<<16) + (g<18)+b).toString(16).slice(1));
    }

    return color;
}


const firstColor=makeColor(25,223,225);
firstColor.hex();