const buttons=document.querySelectorAll('button');

const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g}, ${b})`;
}

for(let button of buttons){
    button.addEventListener('click', function(){
        //* button has a each and every button in an iterable format, in order to sytle it , use button variable and change the style of background color.
        button.style.backgroundColor=makeRandColor();
        button.style.color=makeRandColor();
    })
}

// const buttonText=document.querySelectorAll('button');
// for(let color of buttonText){
//     color.style.color=makeRandColor();
// }