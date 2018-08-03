var handleFiles = require('./lib/fileHandling');
var controlModifiers = require('./lib/logModifiers');
var logToConsole = require('./lib/logToConsole');
var logToFile = require('./lib/logToFile');

/**
 * Green-Jay Object.
 * @author Jexulie <fejitj3n@yahoo.com>
 * @version 0.1.0
 */
var Greenjay = {

    ops : {},

    defaultOps: {
        useFile: false,
        filePath: './',
        outputType: 'text',
        defaultLevelColors: true,
    },
    defaultMods: {
        date: {

        },
        message: {

        },
        level: {

        }
    },

    

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
    createLogger: function(options = this.defaultOps){
        var defaulted = this.defaultOps(options);
        console.log(defaulted)
        this.ops = defaulted;

        // array for combined logs ...logs
    },

    /**
     * Defaults Options.
     * @param {object} ops
     * @returns {object} ops
     */
    defaultOps(ops){
        if(typeof ops.useConsole === 'undefined'){
            ops.useConsole = true;
        }
        if(typeof ops.useFile === 'undefined'){
            ops.useFile = false;
        }
        if(typeof ops.filePath === 'undefined'){
            ops.filePath = './';
        }
        if(typeof ops.outputType === 'undefined'){
            ops.outputType = 'text';
        }
        if(typeof ops.defaultLevelColors === 'undefined'){
            ops.defaultLevelColors = true;
        }
        return ops;
    },

    /**
     * Defaults Modifiers.
     * @param {object} mod
     * @param {string} level
     * @returns {object} mod
     */
    defaultMod: function(mod, level){
        if(typeof mod.date === 'undefined'){
            mod.date = {};
        }
        if(typeof mod.message === 'undefined'){
            mod.message = {};

        }
        if(typeof mod.level === 'undefined'){
            mod.level = {};
        }
        if(typeof mod.level.color === 'undefined'){
            if(this.ops.defaultLevelColors){
                switch(level){
                    case 'Emergency':
                        mod.level.color = '#e0f795';
                        break;
                    case 'Alert':
                        mod.level.color = '#ef9c24';
                        break;
                    case 'Critical':
                        mod.level.color = '#ef4824';
                        break;
                    case 'Error':
                        mod.level.color = '#ef2424';
                        break;
                    case 'Warning':
                        mod.level.color = '#efb424';
                        break;
                    case 'Info':
                        mod.level.color = '#2f89f5';
                        break;
                    case 'Debug':
                        mod.level.color = '#34ed72';
                        break;
                    default:
                        mod.level.color = '#ffffff';
                        break;
                }   
            }
        }
        return mod;
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
    emergency: function(message, modify=this.defaultMods){
        var level = 'Emergency';
        
        // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}}; 
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
    alert: function(message, modify=this.defaultMods){
        var level = 'Alert';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    critical: function(message, modify=this.defaultMods){
        var level = 'Critical';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    error: function(message, modify=this.defaultMods){
        var level = 'Error';

         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    warning: function (message, modify=this.defaultMods){
        var level = 'Warning';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    info: function(message, modify=this.defaultMods){
        var level = 'Info';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    debug: function(message, modify=this.defaultMods){
        var level = 'Debug';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
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
    trivial: function(message, modify=this.defaultMods){
        var level = 'Trivial';
        
         // input failsafe !
        var modded = this.defaultMod(modify, level);

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(modded);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);   
        }
        // Normalize.
        this.defaultMods = {date:{}, message:{}, level:{}};
    }

}

module.exports = Greenjay;