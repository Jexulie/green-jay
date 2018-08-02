var chalk = require('chalk');

function handleAll(date, message, level, modifiers){
    // handle date -  colorize -> bgcolor -> modify
    var colorizedDate = colorize(date, modifiers.color.date)
    var bgColorizedDate = bgColorize(colorizedDate, date, modifiers.bg.date)
    var modifiedDate = modify(bgColorizedDate, date, modifiers.modify.date)
    console.log(modifiedDate)
    // return bgColorizedDate
    // handle message

    // handle level

    // return combined
}

function colorize(item, modifier){
    if(modifier.hex){
        return chalk.hex(modifier.value)
    }else if(modifier.rgb){
        return chalk.rgb(modifier.value)(item)
    }else if(modifier.keyword){
        return chalk.keyword(modifier.value)(item)
    }else {
        return chalk();
    }
}


function bgColorize(func, item, modifier){
    // return func.bgRed works
    // return func.bgHex('#777') works as well
    return func.bgRgb(0,255,0)
}


function modify(func, item, modifier){
    if(modifier.value === 'underline'){
        return func.underline(item)
    }
}

module.exports = handleAll;