const button=document.querySelector('#changeColor');
const container=document.querySelector('#container');

button.addEventListener('click', function(e){
    container.style.backgroundColor=makeRandColor();
    //* To stop bubbling, we need to use a event object where a property is defined called stopProgation().

    e.stopPropagation()
})

container.addEventListener('click', function(){
    container.classList.toggle('hide')
})

function makeRandColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`

}