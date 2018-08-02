var chalk = require('chalk');
var getDate = require('./handleDate');

function log(message, level, modifiers){
    // get message 
    console.log(`message - ${message} \n`);
    console.log(`level - ${level} \n`);
    console.log(modifiers);

    // chalk it


    // log it properly
    // console.log(chalkedMessage);
}

module.exports = log;

