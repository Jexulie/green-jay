var chalk = require('chalk');

function handleAll(date, message, level, modifiers){
    // handle date -  colorize -> bgcolor -> modify
    var colorizedDate = colorize(date, modifiers.color.date)
    var bgColorizedDate = bgColorize(colorizedDate, date, modifiers.bg.date)
    var modifiedDate = modify(bgColorizedDate, date, modifiers.modify.date)
    // return bgColorizedDate
    // handle message

    // handle level

    // return combined
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
        return chalk();
    }
}


function bgColorize(func, item, modifier){
    // return func.bgRed works
    // return func.bgHex('#777') works as well
    // return func.bgRgb(0,255,0)

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
        case 'underline':
            return func.underline(item)
    }
}

module.exports = handleAll;