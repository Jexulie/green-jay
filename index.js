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
        filePath: './',
        outputType: 'text'
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
    * @param {boolean} [options.useConsol～e  Defines Should Logger Prints to Console.
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

        if(typeof this.mod.level.color === 'undefined'){
            // this.mod.level.color = '#581845'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }   
    },

    /**
     * Create Alert Level Log
     * @param {string} message
     * @public 
     */
    alert: function(message){
        var level = 'Alert';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#ef9c24'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Critical Level Log
     * @param {string} message
     * @public 
     */
    critical: function(message){
        var level = 'Critical';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#ef4824'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Error Level Log
     * @param {string} message
     * @public 
     */
    error: function(message){
        var level = 'Error';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#ef2424'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Warning Level Log
     * @param {string} message
     * @public 
     */
    warning: function (message){
        var level = 'Warning';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#efb424'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Info Level Log
     * @param {string} message
     * @public 
     */
    info: function(message){
        var level = 'Info';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#2f89f5'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Debug Level Log
     * @param {string} message
     * @public 
     */
    debug: function(message){
        var level = 'Debug';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#34ed72'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    },

    /**
     * Create Trivial Level Log
     * @param {string} message
     * @public 
     */
    trivial: function(message){
        var level = 'Trivial';
        
        if(typeof this.mod.level.color === 'undefined'){
            this.mod.level.color = '#d1d7d3'
        }

        if(this.ops.useConsole){
            var checkedModifiers = controlModifiers(this.mod);
            logToConsole(message, level, this.ops.outputType, checkedModifiers);
        }else if(this.ops.useFile){
            handleFiles(this.ops.filePath);
            logToFile(message, level, this.ops.filePath, this.ops.outputType);                
        }
    }

}

module.exports = Greenjay;