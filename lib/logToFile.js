var chalk = require('chalk');
var fs = require('fs');
var getDate = require('./handleDate');


function log(message ,label, level , path, type){
    // get message 
    var date = getDate();

    var logFormat;

    // log it properly TODO: think about this later... maybe move it to fileHandling

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

        fs.appendFile(path, logFormat + '\n', 'utf-8', err => {
            if(err) throw err;
        });

    }else if(type === 'text'){
        if(typeof label === 'undefined'){
            logFormat = `${date} - ${level} - ${message}. \n`;
            
        }else{
            logFormat = `${date} - ${label} - ${level} - ${message}. \n`;
        } 
        fs.appendFile(path, logFormat, 'utf-8', err => {
            if(err) throw err;
        });      
    }
    
}

module.exports = log;