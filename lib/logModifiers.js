/**
 * takes options and returns fixed options.
 * @param {object} options
 * @returns {object} checkedModifiers
 * @private
 */
function controlModifiers(uncheckedMods){

    // get modifier values
    var color = colorizeConsole(
        {
            date: uncheckedMods.date.dateColor, 
            message: uncheckedMods.message.messageColor, 
            level: uncheckedMods.level.levelColor
        }
    );
    var modify = modifyConsole(
        {
            date: uncheckedMods.date.dateModify, 
            message: uncheckedMods.message.messageModify, 
            level: uncheckedMods.level.levelModify
        }
    );
    var bg = setBgColorConsole(
        {
            date: uncheckedMods.date.dateBg, 
            message: uncheckedMods.message.messageBg, 
            level: uncheckedMods.level.levelBg
        }
    );

    return {
        color: color,
        modify: modify,
        bg: bg
    }
    
}

/**
 * Checks Color Values.
 * @param {object} colorObject
 * @returns {object} checkedValues
 * @private 
 */
function colorizeConsole(colors){
    // chalk values
    var COLORS = [
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright'
    ];

    // returns if value is undefined
    if(typeof colors.date === 'undefined' && 
    typeof colors.message === 'undefined' && 
    typeof colors.level === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedColors = {};

    // checks if date value is hex, rgb or keyword
    if(checkHex(colors.date)){
        checkedColors.date =  {
            value:colors.date,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(colors.date)){
        checkedColors.date = {
            value: colors.date,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(colors.date)){
        // checks if keyword is in the list
        if(COLORS.includes(colors.date.toLowerCase())){
            checkedColors.date = {
                value: colors.date,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // checks if message value is hex, rgb or keyword
    if(checkHex(colors.message)){
        checkedColors.message = {
            value: colors.message,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(colors.message)){
        checkedColors.message = {
            value: colors.message,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(colors.message)){
        // checks if keyword is in the list
        if(COLORS.includes(colors.message.toLowerCase())){
            checkedColors.message = {
                value: colors.message,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // checks if level value is hex, rgb or keyword
    if(checkHex(colors.level)){
        checkedColors.level = {
            value: colors.level,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(colors.level)){
        checkedColors.level = {
            value: colors.level,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(colors.level)){
        // checks if keyword is in the list
        if(COLORS.includes(colors.level.toLowerCase())){
            checkedColors.level = {
                value: colors.level,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    return checkedColors;
}

/**
 * Checks Modify Values.
 * @param {object} modifyObject
 * @returns {object} checkedValues
 * @private
 */
function modifyConsole(modifies){
    // chalk values
    var MODIFIERS = [
        'reset',
        'bold',
        'dim',
        'italic',
        'underline',
        'inverse',
        'strikethrough'
    ];

    // return if everything is valueless
    if(typeof modifies.date === 'undefined' && typeof modifies.message === 'undefined' && typeof modifies.level === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedModify = {};

    if(MODIFIERS.includes(modifies.date.toLowerCase())){
        checkedModify.date = {
            value: modifies.date
        }
    }

    if(MODIFIERS.includes(modifies.message.toLowerCase())){
        checkedModify.message = {
            value: modifies.message
        }
    }

    if(MODIFIERS.includes(modifies.level.toLowerCase())){
        checkedModify.level = {
            value: modifies.level
        }
    }

    return checkedModify;

}

/**
 * Checks Bg Values.
 * @param {object} bgObject
 * @private 
 */
function setBgColorConsole(bgs){
    // TODO: add bg to front ?
    // chalk values
    var BGCOLORS = [
        'bgBlack',
        'bgRed',
        'bgGreen',
        'bgYellow',
        'bgBlue',
        'bgMagenta',
        'bgCyan',
        'bgWhite',
        'bgBlackBright',
        'bgRedBright',
        'bgGreenBright',
        'bgYellowBright',
        'bgBlueBright',
        'bgMagentaBright',
        'bgCyanBright',
        'bgWhiteBright'
    ];

    // return if everything is valueless
    if(typeof bgs.date === 'undefined' && typeof bgs.message === 'undefined' && typeof bgs.level === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedBg = {};

    // check if date value is hex, rgb or keyword
    if(checkHex(bgs.date)){
        checkedBg.date = {
            value:bgs.date,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(bgs.date)){
        checkedBg.date = {
            value: bgs.date,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(bgs.date)){
        // check if keyword is in the list
        if(BGCOLORS.includes(bgs.date.toLowerCase())){
            checkedBg.date = {
                value: bgs.date,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if message value is hex, rgb or keyword
    if(checkHex(bgs.message)){
        checkedBg.message = {
            value: bgs.message,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(bgs.message)){
        checkedBg.message = {
            value: bgs.message,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(bgs.message)){
        // check if keyword is in the list
        if(BGCOLORS.includes(bgs.message.toLowerCase())){
            checkedBg.message = {
                value: bgs.message,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if level value is hex, rgb or keyword
    if(checkHex(bgs.level)){
        checkedBg.level = {
            value: bgs.level,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(bgs.level)){
        checkedBg.level = {
            value: bgs.level,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(bgs.level)){
        // check if keyword is in the list
        if(BGCOLORS.includes(bgs.level.toLowerCase())){
            checkedBg.level = {
                value: bgs.level,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    return checkedBg;

}

/**
 * Checks If Value Is Hex.
 * @param {string} value
 * @returns {object} checkedValues
 * @private
 */
function checkHex(value){
    var regex = /^([abcdef0-9]{3}|[abcdef0-9]{6})$/ig;
    return regex.test(value);
}

/**
 * Checks If Value Is RGB.
 * @param {string} value 
 * @private
 */
function checkRGB(value){
    var regex = /^\(([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/ig;
    return regex.test(value);
}

// TODO: might have a problem here 

/**
 * Checks If Value Is Keyword.
 * @param {string} value 
 * @private
 */
function checkKeyword(value){
    var regex = /^\w+$/ig;
    return regex.test(value);
}

module.exports = controlModifiers;