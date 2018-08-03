var handleFiles = require('./lib/fileHandling');
var controlModifiers = require('./lib/logModifiers');
var logToConsole = require('./lib/logToConsole');
var logToFile = require('./lib/logToFile');
var normals = require('./lib/defaults');

/**
 * Green-Jay Object.
 * @author Jexulie <fejitj3n@yahoo.com>
 * @version 0.1.0
 */
var Greenjay = {

    /**
     * Create Logger Options and Modify Console Output.
     * @public
     * @param {Object} options Logger Options Object.
     * @param {boolean} [options.useConsole] Defines Should Logger Prints to Console. - default is true.
     * @param {boolean} [options.useFile] Defines Should Logger Prints to File. - default is false.
     * @param {string} [options.filePath] Defines Path to File. - creates folder if it doesn't exist - default is './'.
     * @param {string} options.outputType Defines Output Type. - 'text' or 'json' default is 'text'.
     * @param {boolean} [options.defaultLevelColors] Disables/Enables Default Level Colors. - default is true.
     */
    createLogger: function(options = normals.defaultOptions){
        var defaulted = normals.defaultsOps(options);
        normals.ops = defaulted;

        // array for combined logs ...logs
    },

    /**
     * Create Emergency Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    emergency: function(message, modify=normals.defaultModifiers){
        var level = 'Emergency';
        
        // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}}; 
    },

    /**
     * Create Alert Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    alert: function(message, modify=normals.defaultsModifiers){
        var level = 'Alert';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Critical Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    critical: function(message, modify=normals.defaultsModifiers){
        var level = 'Critical';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Error Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    error: function(message, modify=normals.defaultsModifiers){
        var level = 'Error';

         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Warning Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    warning: function (message, modify=normals.defaultsModifiers){
        var level = 'Warning';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Info Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    info: function(message, modify=normals.defaultsModifiers){
        var level = 'Info';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Debug Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    debug: function(message, modify=normals.defaultsModifiers){
        var level = 'Debug';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    },

    /**
     * Create Trivial Level Log
     * @param {string} message
     * @param {Object} [modify] Console Output Modify Object.
     * @param {object} [modify.date] Modify Date Object.
     * @param {object} [modify.message] Modify Message Object. 
     * @param {object} [modify.level] Modify Level Object. 
     * @param {string} [modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.date.modify] Changes Date Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.color] Changes Message Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.message.modify] Changes Message Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.message.bg] Changes Message Background Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.color] Changes Level Color. - Either Hex, RGB or Keyword
     * @param {string} [modify.level.modify] Changes Level Style. - Bold, Italic, Underline etc...
     * @param {string} [modify.level.bg] Changes Level Background Color. - Either Hex, RGB or Keyword
     * @public
     */
    trivial: function(message, modify=normals.defaultsModifiers){
        var level = 'Trivial';
        
         // input failsafe !
        var modded = normals.defaultsMod(modify, level);

        if(normals.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, normals.ops.outputType, checkedModifiers);
        }else if(normals.ops.useFile){
            handleFiles(normals.ops.filePath);
            logToFile(message, level, normals.ops.filePath, normals.ops.outputType);   
        }
        // Normalize.
        normals.defaultsModifiers = {date:{}, message:{}, level:{}};
    }

}

module.exports = Greenjay;