function controlModifiers({
    level,
    date: {
        color: color,
        modify: modify,
        bg: bg
    },
    message: {
        color: color,
        modify: modify,
        bg: bg
    },
    bg: {
        color: color,
        modify: modify,
        bg: bg
    }
}){

    // get modifier values
    var color = colorizeConsole({date: date.color, message: message.color, level: level.color});
    var modify = modifyConsole({date: date.modify, message: message.modify, level: level.modify});
    var bg = setBgColorConsole({date: date.level, message: message.level, level: level.level});

    return {
        level: level,
        color: color,
        modify: modify,
        bg: bg
    }
    
}

function colorizeConsole({date: color, message: color, level: color}){
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

    // return if value is undefined
    if(typeof date.color === 'undefined' && typeof message.color === 'undefined' && typeof level.color === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedColors = {};

    // check if date value is hex, rgb or keyword
    if(checkHex(date.color)){
        checkedColors.date =  {
            value:date.color,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(date.color)){
        checkedColors.date = {
            value: date.color,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(date.color)){
        // check if keyword is in the list
        if(COLORS.includes(date.color.toLowerCase())){
            checkedColors.date = {
                value: date.color,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if message value is hex, rgb or keyword
    if(checkHex(message.color)){
        checkedColors.message = {
            value: message.color,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(message.color)){
        checkedColors.message = {
            value: message.color,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(message.color)){
        // check if keyword is in the list
        if(COLORS.includes(message.color.toLowerCase())){
            checkedColors.message = {
                value: message.color,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if level value is hex, rgb or keyword
    if(checkHex(level.color)){
        checkedColors.level = {
            value: message.color,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(level.color)){
        checkedColors.level = {
            value: message.color,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(level.color)){
        // check if keyword is in the list
        if(COLORS.includes(level.color.toLowerCase())){
            checkedColors.level = {
                value: message.color,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    return checkedColors;
}

function modifyConsole({date: modify, message: modify, level: modify}){
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
    if(typeof date.modify === 'undefined' && typeof message.modify === 'undefined' && typeof level.modify === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedModify = {};

    if(MODIFIERS.includes(date.modify.toLowerCase())){
        checkedModify.date = {
            value: date.modify
        }
    }

    if(MODIFIERS.includes(message.modify.toLowerCase())){
        checkedModify.message = {
            value: message.modify
        }
    }

    if(MODIFIERS.includes(level.modify.toLowerCase())){
        checkedModify.level = {
            value: level.modify
        }
    }

    return checkedModify;

}

function setBgColorConsole({date: bg, message: bg, level: bg}){
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
    if(typeof date.bg === 'undefined' && typeof message.bg === 'undefined' && typeof level.bg === 'undefined') {
        return {
            value: 'undefined',
            hex: false,
            rgb: false,
            keyworld: false
        }
    }

    var checkedBg = {};

    // check if date value is hex, rgb or keyword
    if(checkHex(date.bg)){
        checkedBg.date = {
            value:date.bg,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(date.bg)){
        checkedBg.date = {
            value: date.bg,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(date.bg)){
        // check if keyword is in the list
        if(BGCOLORS.includes(date.bg.toLowerCase())){
            checkedBg.date = {
                value: date.bg,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if message value is hex, rgb or keyword
    if(checkHex(message.bg)){
        checkedBg.message = {
            value: message.bg,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(message.bg)){
        checkedBg.message = {
            value: message.bg,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(message.bg)){
        // check if keyword is in the list
        if(BGCOLORS.includes(message.bg.toLowerCase())){
            checkedBg.message = {
                value: message.bg,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    // check if level value is hex, rgb or keyword
    if(checkHex(level.bg)){
        checkedBg.level = {
            value: message.bg,
            hex: true,
            rgb: false,
            keyword: false
        }
    }else if(checkRGB(level.bg)){
        checkedBg.level = {
            value: message.bg,
            hex: false,
            rgb: true,
            keyword: false
        }
    }else if(checkKeyword(level.bg)){
        // check if keyword is in the list
        if(BGCOLORS.includes(level.bg.toLowerCase())){
            checkedBg.level = {
                value: message.bg,
                hex: false,
                rgb: false,
                keyword: true
            }
        }
    }

    return checkedBg;

}

function checkHex(value){
    var regex = /^([abcdef0-9]{3}|[abcdef0-9]{6})$/ig;
    return regex.test(value);
}

// TODO: check [01]? for double digit entries
function checkRGB(value){
    var regex = /^\(([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\,([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/ig;
    return regex.test(value);
}

// TODO: might have a problem here / make a second test for in colors array
function checkKeyword(value){
    var regex = /^\w+$/ig;
    return regex.test(value);
}

module.exports = controlModifiers;