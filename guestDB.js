const chalk = require('chalk');

const addGuest = () => {
    console.log(chalk.green("Add Guest"));
};

const updateGuest = () => {
    console.log(chalk.blue("Update Guest"));
};


const deleteGuest = () => {
    console.log(chalk.red("Delete Guest"));
};

const searchGest = () => {
    console.log(chalk.magenta("Get Seach Guest"));
};

const getAllGest = () => {
    console.log(chalk.magenta("Get All Guest"));
};


module.exports = {
    addGuest, updateGuest, deleteGuest, searchGest, getAllGest
};
