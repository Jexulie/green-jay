var chalk = require('chalk');
var fs = require('fs');
var getDate = require('./handleDate');


function log(message ,label, level , path, type, shouldStop){
    // get message 
    var date = getDate();

    var logFormat;

    // quick fix for objects / arrays
    if(typeof message === 'object' && type === 'text'){
        message = JSON.stringify(message);
    }else if(typeof message === 'function' && type === 'json'){
        message = message.toString();
    }

    // type logic
    if(type === 'json'){
        if(typeof label === 'undefined'){
            logFormat = {
                date: date,
                level: level,
                message
            }
        }else{
            logFormat = {
                date: date,
                label: label,
                level: level,
                message
            }
        }
        
        logFormat = JSON.stringify(logFormat)

        fs.appendFileSync(path, logFormat + '\n', 'utf-8');

        if(shouldStop){
            fs.appendFileSync(path, `${level} log created. Closing Program... \n`);
            process.exit(1);
        }
    }else if(type === 'text'){
        if(typeof label === 'undefined'){
            logFormat = `${date} - ${level} - ${message}. \n`;
        }else{
            logFormat = `${date} - ${label} - ${level} - ${message}. \n`;
        } 
        
        fs.appendFileSync(path, logFormat, 'utf-8');

        if(shouldStop){
            fs.appendFileSync(path, `${level} log created. Closing Program... \n`);
            process.exit(1);
        }        
    }
    
}

module.exports = log;