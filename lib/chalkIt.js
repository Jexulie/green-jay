var chalk = require('chalk');

function handleAll(date, message, level, modifiers){
    // handle date
    var colorizedDate = colorize(date, modifiers.color.date)
    var modifiedDate = modify(colorizedDate, modifiers.modify.date)
    var bgColorizedDate = bgColorize(modifiedDate, date, modifiers.bg.date)
    console.log(bgColorizedDate)
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

function modify(func, modifier){
    if(modifier.value === 'underline'){
        return func.underline
    }
}

function bgColorize(func, item, modifier){
    console.log(func.bgRed(item))
}

module.exports = handleAll;