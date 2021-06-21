const fs = require('fs');
// const os = require('os');

// fs.writeFileSync('data.txt', 'Hello JavaScript'); //file create and write
// fs.appendFileSync('data.txt', ' Node js');//file create and append data to created file

// const data = fs.readFileSync('data.txt'); //data read from created file
// console.log(data); //data read as buffer
// console.log(data.toString()); //data read as string

// console.log(os.freemem()); //check free memory
// console.log(os.totalmem()); //check total memory


//save data to json file

const guest = [];

guest.push({
    name: "Name",
    address: "add01"
});

const dataJson = JSON.stringify(guest);

fs.writeFileSync("guest_data.json", dataJson);
