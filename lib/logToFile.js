var chalk = require('chalk');
var fs = require('fs');
var getDate = require('./handleDate');


function log(message ,level , path, type){
    // get message 
    var date = getDate();

    var logFormat;

    // log it properly TODO: think about this later... maybe move it to fileHandling

    if(type === 'json'){
        logFormat = {
            date: date,
            level: level,
            message
        }

        fs.appendFileSync(path, logFormat);

    }else if(type === 'text'){
        logFormat = `${date} - ${level} - ${message}. \n`;
        fs.appendFile(path, logFormat, 'utf-8', err => {
            if(err) throw err;
        });
    }
    
}

module.exports = log;