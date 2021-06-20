// const fs = require('fs');

// fs.writeFileSync('data.txt', 'Hello JavaScript'); //file create and write
// fs.appendFileSync('data.txt', ' Node js');//file create and append data to created file

// const data = fs.readFileSync('data.txt'); //data read from created file
// console.log(data); //data read as buffer
// console.log(data.toString()); //data read as string

const os = require('os');

console.log(os.freemem()); //check free memory
console.log(os.totalmem()); //check total memory
