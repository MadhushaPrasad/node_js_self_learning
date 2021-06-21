const chalk = require('chalk');

const addGuest = (dataObject) => {
    console.log(chalk.green("Add Guest ", dataObject.name, dataObject.address));
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


module.exports = {
    addGuest, updateGuest, deleteGuest, searchGest, getAllGest
};
