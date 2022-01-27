const args=process.argv.slice(2);
//* here process is responsible to have argv, process is an object.
//* taking string from the terminal and printing it 
for(let arg of args){
    console.log(`Hi there, ${arg}`)
}