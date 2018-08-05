var chalkIt = require('./chalkIt');
var getDate = require('./handleDate');

function log(message, label, level, type, modifiers = {}){
    // get date
    var date = getDate();
    // chalk it
    var chalkedMessage = chalkIt(date, message, level, modifiers);
    var logMsg;
    // log it properly
    // json screws up colors so fake json
    if(type === 'json'){
        if(typeof label === 'undefined'){
            var jsonize =`
            {date:${chalkedMessage.modifiedDate},
            level: ${chalkedMessage.modifiedLevel}, 
            message: ${chalkedMessage.modifiedMessage}}
            `
        }else{
            var jsonize =`
            {date:${chalkedMessage.modifiedDate}, 
            label: ${label}, 
            level: ${chalkedMessage.modifiedLevel}, 
            message: ${chalkedMessage.modifiedMessage}}
            `
        }
        console.log(jsonize);        
        // if critical or emergency stops program if option is true FUTURE:
    }else if(type === 'text'){
        if(typeof label === 'undefined'){
            logMsg = `${chalkedMessage.modifiedDate} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage}`
        }else{
            logMsg = `${chalkedMessage.modifiedDate} - ${label} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage}`
        }
        console.log(logMsg);
    }
}

module.exports = log;

