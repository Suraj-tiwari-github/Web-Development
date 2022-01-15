// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container=document.querySelector('#container');
// const newImg=document.createElement('img');
// newImg.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.appendChild(newImg);

//* we are going to print every pokemon line by line, as img tag is a in-line container so every pokemon character will be printed in line.

//* we'll create a new base url as they have a similar pattern, in order to get the next pokemon just change the src to 1,2,3,4,5.png.

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


for(let i=1; i<899; i++){
    //* what we are doing here is:
    //* <div> is a container now.
    //* under <span> we'll have our image and the numbers for it which we are calling it now as label.
    const pokemon=document.createElement('div');
    //* div is contain each pokemon
    const label=document.createElement('span');
    label.innerText=`- ${i} -`;

    //* giving a class name for each div as pokemon.
    pokemon.classList.add('pokemon')
    const newImg=document.createElement('img');
    newImg.src=`${baseURL}${i}.png`; //* here we have use a string template literal and also a dyanamic URL.
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    //* pokemon is containing the img and the label to it. we need to append pokemon to the container as we have selected it by using a querySelector.
    container.appendChild(pokemon);

}