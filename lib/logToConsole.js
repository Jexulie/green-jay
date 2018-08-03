var chalkIt = require('./chalkIt');
var getDate = require('./handleDate');

function log(message, level, type, modifiers = {}){
    console.log(modifiers)
    // get date
    var date = getDate();
    // chalk it
    var chalkedMessage = chalkIt(date, message, level, modifiers);

    // log it properly
    // json screws up colors TODO:
    if(type === 'json'){
        var jsonize = {
            date: date,
            level: level,
            message: message
        }
        console.log(JSON.stringify(jsonize), '\n');
    }else if(type === 'text'){
        console.log(`${chalkedMessage.modifiedDate} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage} \n`);
    }
}

module.exports = log;

