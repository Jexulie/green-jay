var chalk = require('chalk');

/**
 * Handles Modification of Logs
 * route: colorize -> bgcolor -> modify -> combine
 * @param {string} date 
 * @param {string} message 
 * @param {string} level 
 * @param {object} modifiers
 * @returns {object} combined
 */
function handleAll(date, message, level, modifiers){
    // handle date
    var colorizedDate = colorize(modifiers.color.date);
    var bgColorizedDate = bgColorize(colorizedDate, modifiers.bg.date);
    var modifiedDate = modify(bgColorizedDate, date, modifiers.modify.date);
    // handle message
    var colorizedMessage = colorize(modifiers.color.message);
    var bgColorizedMessage = bgColorize(colorizedMessage, modifiers.bg.message);
    var modifiedMessage = modify(bgColorizedMessage, message, modifiers.modify.message);
    // handle level
    var colorizedLevel = colorize(modifiers.color.level);
    var bgColorizedLevel = bgColorize(colorizedLevel, modifiers.bg.level);
    var modifiedLevel = modify(bgColorizedLevel, level, modifiers.modify.level);
    // return combined
    var combined = {
        modifiedDate: modifiedDate,
        modifiedLevel: modifiedLevel,
        modifiedMessage: modifiedMessage
    }

   return combined
}

/**
 * Converts String RGB to Number Colors
 * @param {string} value 
 * @returns {object} colors
 */
function convertRGB(value){
    var regex = /\((\d+),(\d+),(\d+)\)/ig
    var convert = regex.exec(value)
    var colors = {
        r: convert[1],
        g: convert[2],
        b: convert[3],
    }
    return colors
}

/**
 * Colorize Log.
 * @param {object} modifier 
 * @returns {object} chalk if there is no color selected | colorized object
 */
function colorize(modifier){
    if(modifier.hex){
        return chalk.hex(modifier.value)
    }else if(modifier.rgb){
        var colors = convertRGB(modifier.value)
        return chalk.rgb(colors.r, colors.g, colors.b)
    }else if(modifier.keyword){
        return chalk.keyword(modifier.value)
    }else {
        return chalk;
    }
}

/**
 * Colorizes Background of Log.
 * @param {object} func object taken from colorize
 * @param {object} modifier
 * @returns {object} func or modified object
 */
function bgColorize(func, modifier){
    if(modifier.hex){
        return func.bgHex(modifier.value)
    }else if(modifier.rgb){
        var colors = convertRGB(modifier.value)
        return chalk.bgRgb(colors.r, colors.g, colors.b)
    }else if(modifier.keyword){
        return func.bgKeyword(modifier.value)
    }else {
        return func;
    }
}

/**
 * Modifies Log and Adds String.
 * @param {object} func object taken from bgColorize
 * @param {object} item string value
 * @param {object} modifier 
 * @returns {object} func or modified object
 */
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