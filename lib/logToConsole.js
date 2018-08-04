var chalkIt = require('./chalkIt');
var getDate = require('./handleDate');

function log(message, level, type, modifiers = {}){
    // get date
    var date = getDate();
    // chalk it
    var chalkedMessage = chalkIt(date, message, level, modifiers);

    // log it properly
    // json screws up colors so fake json
    if(type === 'json'){
        var jsonize =`{date:${chalkedMessage.modifiedDate}, level: ${chalkedMessage.modifiedLevel}, message: ${chalkedMessage.modifiedMessage}}`
        console.log(jsonize);
        // if critical or emergency stops program if option is true FUTURE:
    }else if(type === 'text'){
        console.log(`${chalkedMessage.modifiedDate} - ${chalkedMessage.modifiedLevel} - ${chalkedMessage.modifiedMessage}`);
    }
}

module.exports = log;

