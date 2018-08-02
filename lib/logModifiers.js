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
            date: uncheckedMods.date.color, 
            message: uncheckedMods.message.color, 
            level: uncheckedMods.level.color
        }
    );
    var modify = modifyConsole(
        {
            date: uncheckedMods.date.modify, 
            message: uncheckedMods.message.modify, 
            level: uncheckedMods.level.modify
        }
    );
    var bg = setBgColorConsole(
        {
            date: uncheckedMods.date.bg, 
            message: uncheckedMods.message.bg, 
            level: uncheckedMods.level.bg
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
        'redbright',
        'greenbright',
        'yellowbright',
        'bluebright',
        'magentabright',
        'cyanbright',
        'whitebright'
    ];

    var checkedColors = {
        date: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        message: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        level: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    };


    // returns if value is undefined
    if(typeof colors.date === 'undefined' && 
    typeof colors.message === 'undefined' && 
    typeof colors.level === 'undefined') {
        return checkedColors;
    }

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
        if(typeof colors.date !== 'undefined'){
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
        if(typeof colors.message !== 'undefined'){
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
        if(typeof colors.level !== 'undefined'){
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
        'bold',
        'underline',
    ];

    var checkedModify = {
        date: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        message: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        level: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    };

    // return if everything is valueless
    if(typeof modifies.date === 'undefined' && typeof modifies.message === 'undefined' && typeof modifies.level === 'undefined') {
        return checkedModify;
    }  

    if(typeof modifies.date !== 'undefined'){
        if(MODIFIERS.includes(modifies.date.toLowerCase())){
            checkedModify.date = {
                value: modifies.date
            }
        }
    }

    if(typeof modifies.message !== 'undefined'){
        if(MODIFIERS.includes(modifies.message.toLowerCase())){
            checkedModify.message = {
                value: modifies.message
            }
        }
    }

    if(typeof modifies.level !== 'undefined'){
        if(MODIFIERS.includes(modifies.level.toLowerCase())){
            checkedModify.level = {
                value: modifies.level
            }
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
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'blackbright',
        'redbright',
        'greenbright',
        'yellowbright',
        'bluebright',
        'magentabright',
        'cyanbright',
        'whitebright'
    ];

    var checkedBg = {
        date: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        message: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        },
        level: {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    };

    // return if everything is valueless
    if(typeof bgs.date === 'undefined' && typeof bgs.message === 'undefined' && typeof bgs.level === 'undefined') {
        return checkedBg;
    }

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
        if(typeof bgs.date !== 'undefined'){
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
        if(typeof bgs.message !== 'undefined'){
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
        if(typeof bgs.level !== 'undefined'){
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
    var regex = /^((#[abcdef0-9]{3})|(#[abcdef0-9]{6}))$/ig;
    return regex.test(value);
}

/**
 * Checks If Value Is RGB.
 * @param {string} value 
 * @private
 */
function checkRGB(value){
    // TODO: (1,1,1) error  -> (01,01,01) true
    var regex = /^\(([0-9]|[01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([0-9]|[01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([0-9]|[01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/ig;
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