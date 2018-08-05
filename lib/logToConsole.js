var chalkIt = require('./chalkIt');
var getDate = require('./handleDate');

function log(message, label, level, type, modifiers = {}, shouldStop, usingFiles){
    // get date
    var date = getDate();
    var logMsg;
    // no ops

    // quick fix for objects / arrays
    if(typeof message === 'object'){
        message = JSON.stringify(message);
    }

    if(typeof type === 'undefined' && 
    typeof shouldStop === 'undefined' && 
    typeof usingFiles === 'undefined'){
        logMsg = `${date} - ${level} - ${message}`;
        console.log(logMsg);
    }else{
        // chalk it
        var chalkedMessage = chalkIt(date, message, level, modifiers);
        // log it properly
        // json screws up colors so fake json
        if(type === 'json'){
            if(typeof label === 'undefined'){
                var jsonize =`{date:${chalkedMessage.modifiedDate}, level: ${chalkedMessage.modifiedLevel}, message: ${chalkedMessage.modifiedMessage}}`
            }else{
                var jsonize =`{date:${chalkedMessage.modifiedDate}, label: ${label}, level: ${chalkedMessage.modifiedLevel}, message: ${chalkedMessage.modifiedMessage}}`
            }
            console.log(jsonize);
            if(shouldStop){
                console.log(`${level} log created. Closing Program...`) ;
                if(!usingFiles) process.exit(1);
            }   
            // if critical or emergency stops program if option is  true FUTURE:
        }else if(type === 'text'){
            if(typeof label === 'undefined'){
                logMsg = `${chalkedMessage.modifiedDate} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage}`
            }else{
                logMsg = `${chalkedMessage.modifiedDate} - ${label} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage}`
            }
            console.log(logMsg);
            if(shouldStop){
                console.log(`${level} log created. Closing Program...`) ;
                if(!usingFiles) process.exit(1);
            }
        }
    }
}

module.exports = log;

