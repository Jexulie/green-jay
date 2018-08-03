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
     * @param {Object} options Logger Options Object.
     * @param {boolean} [options.useConsole] Defines Should Logger Prints to Console. - default is true.
     * @param {string} [options.outputType] Defines Output Type. - 'text' or 'json' default is 'text'.
     * @param {boolean} [options.defaultLevelColors] Disables/Enables Default Level Colors. - default is true.
     * @param {Object} [options.modify] Console Output Modify Object.
     * @param {object} [options.modify.date] Modify Date Object.
     * @param {object} [options.modify.message] Modify Message Object. 
     * @param {object} [options.modify.level] Modify Level Object. 
     * @param {string} [options.modify.date.color] Changes Date Color. - Either Hex, RGB or Keyword
     * @param {string} [options.modify.date.modify] Changes Date Style. - Bold, Underline
     * @param {string} [options.modify.date.bg] Changes Date Background Color. - Either Hex, RGB or Keyword
     * @param {string} [options.modify.message.color] Changes Message Color. - Either Hex, RGBor Keyword
     * @param {string} [options.modify.message.modify] Changes Message Style. - Bold, Underline
     * @param {string} [options.modify.message.bg] Changes Message Background Color. - EitherHex, RGB or Keyword
     * @param {string} [options.modify.level.color] Changes Level Color. - Either Hex, RGB orKeyword
     * @param {string} [options.modify.level.modify] Changes Level Style. - Bold, Underline
     * @param {string} [options.modify.level.bg] Changes Level Background Color. - Either Hex,RGB or Keyword
     * @param {Array} [options.logs] Log Array
     * @public
     */
    createLogger: function (options = normals.defaultOptions) {
        // ops
        var defOps = normals.defaultsOps(options);
        normals.ops = defOps;
    },

    /**
     * @param newLog New Logging Options
     * @param {string} newLog.filePath
     * @param {string} newLog.minLevel
     * @public
     */
    logger: function (newLog) {
        this.levels = [
            {level: 1, name: 'emergency'},
            {level: 2, name: 'alert'},
            {level: 3, name: 'critical'},
            {level: 4, name: 'error'},
            {level: 5, name: 'warning'},
            {level: 6, name: 'info'},
            {level: 7, name: 'debug'},
            {level: 8, name: 'trivial'}
        ]

        this.filePath = newLog.filePath;
        this.minLevel = newLog.minLevel;    
        this.minLevelNum = this.levels.find(e => e.name === this.minLevel.toLowerCase()).level;

        this.transmit = function(message, level) {

            this.mods = normals.ops.modifiers;
            this.mods = normals.defaultsMod(this.mods, level);
            this.controledMods = controlModifiers(this.mods);

            if (level <= this.minLevelNum) {
                var levelName = this.levels.find(e => e.level === level).name;
                if (normals.ops.logs.length < 0) {
                    if (normals.ops.useConsole) {
                        logToConsole(message, levelName, normals.ops.outputType, this.controledMods);
                    }
                } else {
                    // handle files here !! TODO:
                    handleFiles(this.filePath);
                    logToFile(message, levelName, this.filePath, normals.ops.outputType);
                    if (normals.ops.useConsole) {
                        logToConsole(message, levelName, normals.ops.outputType, this.controledMods);
                    }
                }
            }
        }
    },

    /**
     * Create Emergency Level Log
     * @param {string} message
     * @public
     */
    emergency: function (message) {
        var level = 1;
        // loop through normals.ops.logs - bad design but it should work...
        // works but creates doubles on console... FUTURE:
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
        
    },

    /**
     * Create Alert Level Log
     * @param {string} message
     * @public
     */
    alert: function (message) {
        var level = 2;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Critical Level Log
     * @param {string} message
     * @public
     */
    critical: function (message) {
        var level = 3;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Error Level Log
     * @param {string} message
     * @public
     */
    error: function (message) {
        var level = 4;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Warning Level Log
     * @param {string} message
     * @public
     */
    warning: function (message) {
        var level = 5;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Info Level Log
     * @param {string} message
     * @public
     */
    info: function (message) {
        var level = 6;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Debug Level Log
     * @param {string} message
     */
    debug: function (message) {
        var level = 7;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    },

    /**
     * Create Trivial Level Log
     * @param {string} message
     * @public
     */
    trivial: function (message) {
        var level = 8;
        for(let a of normals.ops.logs){
            a.transmit(message, level)
        }
    }

}

module.exports = Greenjay;