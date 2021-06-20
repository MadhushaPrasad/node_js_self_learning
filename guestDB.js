const chalk = require('chalk');

const add = () => {
  console.log(chalk.red('Adding'));
};

//View  ------ arrow function as  short
const view = () => console.log(chalk.blue('View'));

module.exports = {
  add,
  view,
};
