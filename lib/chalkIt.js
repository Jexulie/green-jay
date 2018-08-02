var chalk = require('chalk');

function handleAll(date, message, level, modifiers){
    // handle date -  colorize -> bgcolor -> modify
    var colorizedDate = colorize(date, modifiers.color.date);
    var bgColorizedDate = bgColorize(colorizedDate, date, modifiers.bg.date);
    var modifiedDate = modify(bgColorizedDate, date, modifiers.modify.date);
    // handle message
    var colorizedMessage = colorize(message, modifiers.color.message);
    var bgColorizedMessage = bgColorize(colorizedMessage, message, modifiers.bg.message);
    var modifiedMessage = modify(bgColorizedMessage, message, modifiers.modify.message);
    // handle level
    var colorizedLevel = colorize(level, modifiers.color.level);
    var bgColorizedLevel = bgColorize(colorizedLevel, level, modifiers.bg.level);
    var modifiedLevel = modify(bgColorizedLevel, level, modifiers.modify.level);
    // return combined
    var combined = {
        modifiedDate: modifiedDate,
        modifiedLevel: modifiedLevel,
        modifiedMessage: modifiedMessage
    }

   return combined
}

function colorize(item, modifier){
    if(modifier.hex){
        return chalk.hex(modifier.value)
        // modifier value is string but func req number TODO:
    }else if(modifier.rgb){
        return chalk.rgb(modifier.value)
    }else if(modifier.keyword){
        return chalk.keyword(modifier.value)
    }else {
        return chalk;
    }
}


function bgColorize(func, item, modifier){
    if(modifier.hex){
        return func.bgHex(modifier.value)
    }else if(modifier.rgb){
        // modifier value is string but func req number TODO:
        return func.bgRgb(modifier.value)
    }else if(modifier.keyword){
        return func.bgKeyword(modifier.value)
    }else {
        return func;
    }
}


function modify(func, item, modifier){
    switch(modifier.value){
        case 'bold':
            return func.bold(item)
        case 'underline':
            return func.underline(item)
        case 'strikethrough':
            return func.strikethrough(item)
        default: 
            return func(item);
    }
}

module.exports = handleAll;