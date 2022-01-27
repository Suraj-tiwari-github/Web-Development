const fs=require('fs');
const folderName=process.argv[2] || 'Project';
//* here the project will be act as a deafult name for our folder, if user specify no name to it. 

// fs.mkdir('puppies', {recursive:true}, (err)=>{
//     if(err) throw err;
// })

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)
//* all these files goes under folderName