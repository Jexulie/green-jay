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
    mod : {},
    defaultOps: {
        useFile: false,
        filePath: './'
    },
    defaultModify: {
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
     * @param {Object} [modify] Console Output Modify Object.
     * @param {boolean} options.useConsole  Defines Should Logger Prints to Console.
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
    createLogger: function(options = this.defaultOps, modify = this.defaultModify){
        this.ops = options;
        this.mod = modify;
    },
    
    /**
     * Create Emergency Level Log
     * @param {string} message
     * @public
     */
    emergency: function(message){
        var level = 'Emergency';
        // check if modify has values
        if(Object.keys(this.mod).length === 0 && this.mod.constructor === Object){
            
        }else{
            var checkedModifiers = controlModifiers(this.mod);
            if(this.ops.useConsole){
                logToConsole(message, level, checkedModifiers);
            }else if(this.ops.useFile){
                handleFiles(this.ops.filePath);
                logToFile(message, checkedModifiers, this.ops.filePath);
            }
        }    
    },

    /**
     * Create Alert Level Log
     * @param {string} message
     * @public 
     */
    alert: function(message){
        var level = 'Alert';
        
    },

    /**
     * Create Critical Level Log
     * @param {string} message
     * @public 
     */
    critical: function(message){
        var level = 'Critical';
        
    },

    /**
     * Create Error Level Log
     * @param {string} message
     * @public 
     */
    error: function(message){
        var level = 'Error';
           
    },

    /**
     * Create Warning Level Log
     * @param {string} message
     * @public 
     */
    warning: function (message){
        var level = 'Warning';
        
    },

    /**
     * Create Info Level Log
     * @param {string} message
     * @public 
     */
    info: function(message){
        var level = 'Info';
        
    },

    /**
     * Create Debug Level Log
     * @param {string} message
     * @public 
     */
    debug: function(message){
        var level = 'Debug';
        
    },

    /**
     * Create Trivial Level Log
     * @param {string} message
     * @public 
     */
    trivial: function(message){
        var level = 'Trivial';
        
    }

}

module.exports = Greenjay;