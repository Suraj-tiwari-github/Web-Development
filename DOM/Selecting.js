const allImages=document.getElementsByTagName('img')

for(let img of allImages){
    console.log(img.src)
} 

const squareImages=document.getElementsByClassName('square')
for(let img of squareImages){
    img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Sikly_bantam.jpg'
}

