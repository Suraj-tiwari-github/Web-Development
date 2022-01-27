const button=document.querySelector('#btn');
const h1=document.querySelector('h1');
button.addEventListener('click', function(){
    const newColor=makeRandColor();
    //* now set the newColor variable to the background color as a style to the body.
     document.body.style.backgroundColor=newColor;
     h1.innerText=newColor;
})

const makeRandColor=()=>{
  //* lets generate three random numbers. rgb values.
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  //* the reason why we are not adding +1 to generate a random numbers is, as the rgb values start from 0 to 255. and random return 0 too.
  //* Lets return all these three values to a calling function..
  if(r<70 & g<70 & b<70){
      //* if rgb values are less than 30 then it is closer to black, now change the heading color of h1 for user to see it.
      document.body.querySelector("h1").style.color = "white";
    
  }
  else{
      if(r>200 & g>200 & b>200){
          document.body.querySelector('h1').style.color='black';
      }
  }
  return `rgb(${r},${g},${b})`;
}