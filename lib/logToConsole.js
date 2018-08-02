var chalkIt = require('./chalkIt');
var getDate = require('./handleDate');

function log(message, level, modifiers, type){
    // get date
    var date = getDate();
    // chalk it
    var chalkedMessage = chalkIt(date, message, level, modifiers);


    // log it properly
    // console.log(chalkedMessage);
}

module.exports = log;

