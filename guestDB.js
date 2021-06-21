const chalk = require('chalk');
const fs = require('fs');

const data_file = "data.json";//global variable

//add new guest to json file
const addGuest = (dataObject) => {
    const guest = loadGuest();
    guest.push({
        guest_name: dataObject.name,
        guest_address: dataObject.address,
    });
    saveGuest(guest);
    console.log(chalk.green("Add New Guest"));
};

const updateGuest = (dataObject) => {
    console.log(chalk.blue("Update Guest", dataObject.id, dataObject.name, dataObject.address));
};


const deleteGuest = (guest_ID) => {
    console.log(chalk.red("Delete Guest", guest_ID));
};

const searchGest = (guest_ID) => {
    console.log(chalk.magenta("Get Seach Guest", guest_ID));
};

const getAllGest = () => {
    console.log(chalk.magenta("Get All Guest"));
};

//save data to json file
const saveGuest = (guest) => {
    const dataJson = JSON.stringify(guest);//stringify object to string
    fs.writeFileSync(data_file, dataJson);//write data to dataJson file
};

const loadGuest = () => {
    const dataBuffer = fs.readFileSync(data_file);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
};

module.exports = {
    addGuest, updateGuest, deleteGuest, searchGest, getAllGest
};
