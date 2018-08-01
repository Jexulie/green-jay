const chalk = require('chalk')

console.log(chalk.blue(new Date().toLocaleString()) + ' - ' + chalk.red('Error: ') + 'Value Error');

console.log("\x1b[31mRed\x1b[0m")