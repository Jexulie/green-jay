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
     * @param {string} [options.stopProgramAbove] Stops Program If Selected Level and Above Occurs.
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

        this.transmitToConsole = function(message, label, level) {

            // if(typeof normals.ops.logs === 'undefined'){

            //     var levelName = this.levels.find(e => e.level === level).name;

            //     logToConsole(message, label, levelName, undefined, undefined, undefined, undefined); 
                
            // }else{
                var shouldStop;
                if(normals.ops.stopProgramAbove){
                    var selectedLevel = this.levels.find(e => e.name === normals.ops.stopProgramAbove).level
                    shouldStop = level <= selectedLevel ? true : false;
                } 
    
                var usingFiles = typeof normals.ops.logs !== 'undefined';
                // mutates object so cant change color in defaults
                this.mods = Object.assign({},normals.ops.modifiers);
                var normalized = normals.defaultsMod(this.mods, level);
                this.controledMods = controlModifiers(normalized);
                var levelName = this.levels.find(e => e.level === level).name;
                logToConsole(message, label, levelName, normals.ops.outputType, this.controledMods, shouldStop, usingFiles); 
            // }
        }

        this.transmitToFile = function(message, label, level){

            var shouldStop;
            if(normals.ops.stopProgramAbove){
                var selectedLevel = this.levels.find(e => e.name === normals.ops.stopProgramAbove).level
                shouldStop = level <= selectedLevel ? true : false;
            } 

            this.minLevelNum = this.levels.find(e => e.name === this.minLevel.toLowerCase()).level;
            this.mods = normals.ops.modifiers;
            var normalized = normals.defaultsMod(this.mods, level);
            this.controledMods = controlModifiers(normalized);
            var levelName = this.levels.find(e => e.level === level).name;

            if (level <= this.minLevelNum) {
                handleFiles(this.filePath);
                logToFile(message, label, levelName, this.filePath, normals.ops.outputType, shouldStop);
            }
            
        }
    },

    /**
     * Create Emergency Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    emergency: function (message, label = undefined) {
        var level = 1;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Alert Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    alert: function (message, label = undefined) {
        var level = 2;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Critical Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    critical: function (message, label = undefined) {
        var level = 3;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Error Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    error: function (message, label = undefined) {
        var level = 4;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Warning Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    warning: function (message, label = undefined) {
        var level = 5;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Info Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    info: function (message, label = undefined) {
        var level = 6;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Debug Level Log
     * @param {string} message
     * @param {string} label
     */
    debug: function (message, label = undefined) {
        var level = 7;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    },

    /**
     * Create Trivial Level Log
     * @param {string} message
     * @param {string} label
     * @public
     */
    trivial: function (message, label = undefined) {
        var level = 8;
        // create a dude and console it
        if(normals.ops.useConsole){
            var consoleer = new this.logger('', 0)
            consoleer.transmitToConsole(message, label, level)
        }

        // uses logs to write to Files
        if(typeof normals.ops.logs !== 'undefined'){
            if(normals.ops.logs.length > 0){
                for(let a of normals.ops.logs){
                    a.transmitToFile(message, label, level)
                }
            }
        }
    }

}

module.exports = Greenjay;