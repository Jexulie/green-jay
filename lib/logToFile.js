var chalk = require('chalk');
var fs = require('fs');
var getDate = require('./handleDate');


function log(message, options, path){
    // get message 


    // chalk it


    // log it properly TODO: think about this later... maybe move it to fileHandling
    fs.appendFileSync(path, chalkedMessage);
}

module.exports = log;