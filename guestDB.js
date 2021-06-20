const chalk = require('chalk');

const add = () => {
  console.log(chalk.green('Adding'));
};

//View  ------ arrow function as  short
const view = () => console.log(chalk.green('View'));

module.exports = {
  add,
  view,
};
