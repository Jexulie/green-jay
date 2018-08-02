var handleFiles = require('./lib/fileHandling');
var controlModifiers = require('./lib/logModifiers');
var logToConsole = require('./lib/logToConsole');
var logToFile = require('./lib/logToFile');

var Greenjay = {

    ops : {},
    mod : {},

    /**
     * Create Logger Options and Modify Console Output.
     * @param {Object} options Logger Options Object.
     * @param {Object} [modify] Console Output Modify Object.
     * @param {boolean} [options.useConsole]  Defines Should Logger Prints to Console.
     * @param {boolean} [options.useFile] Defines Should Logger Prints to File.
     * @param {string} [options.filePath] Defines Path to File. - creates folder if it doesn't exist
     * @param {string} options.outputType Defines Output Type. - 'text' or 'json'
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
     */
    createLogger: function(options, modify = {}){
        this.ops = options;
        this.mod = modify;
    },
    
    /**
     * Create Emergency Level Log
     * @param {string} message 
     */
    emergency: function(message){
        var level = '1';
        // check if modify has values
        if(Object.keys(this.mod).length === 0 && this.mod.constructor === Object){
            this.mod.level = level;
            var checkedModifiers = controlModifiers();
            if(this.ops.useConsole){
                logToConsole(checkedModifiers);
            }else if(this.ops.useFile){
                handleFiles(this.ops.filePath);
                logToFile(checkedModifiers, this.ops.filePath);
            }
        }       
    },

    /**
     * Create Alert Level Log
     * @param {string} message 
     */
    alert: function(message){
        var level = '2';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    },

    /**
     * Create Critical Level Log
     * @param {string} message 
     */
    critical: function(message){
        var level = '3';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    },

    /**
     * Create Error Level Log
     * @param {string} message 
     */
    error: function(message){
        var level = '4';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
            
        }
    },

    /**
     * Create Warning Level Log
     * @param {string} message 
     */
    warning: function (message){
        var level = '5';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    },

    /**
     * Create Info Level Log
     * @param {string} message 
     */
    info: function(message){
        var level = '6';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    },

    /**
     * Create Debug Level Log
     * @param {string} message 
     */
    debug: function(message){
        var level = '7';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    },

    /**
     * Create Trivial Level Log
     * @param {string} message 
     */
    trivial: function(message){
        var level = '8';
        // check if modify has values
        if(Object.keys(mod).length === 0 && mod.constructor === Object){
            mod.level = level;
            var checkedModifiers = controlModifiers();
        }
    }

}

module.exports = Greenjay;