function Defaults(){}

Defaults.prototype.ops = {};

Defaults.prototype.defaultOptions = {
    outputType: 'text',
    defaultLevelColors: true,
    modifiers: {
        date:{

        },
        level:{

        },
        message:{
            
        }
    }
};
    
Defaults.prototype.defaultModifiers = {
    date: {},
    message: {},
    level: {}
}

/**
 * Defaults Modifiers.
 * @param {object} mod
 * @param {string} level
 * @returns {object} mod
 */
Defaults.prototype.defaultsMod = function(mod, level){
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
                case 1:
                    mod.level.color = '#e0f795';
                    break;
                case 2:
                    mod.level.color = '#ef9c24';
                    break;
                case 3:
                    mod.level.color = '#ef4824';
                    break;
                case 4:
                    mod.level.color = '#ef2424';
                    break;
                case 5:
                    mod.level.color = '#efb424';
                    break;
                case 6:
                    mod.level.color = '#2f89f5';
                    break;
                case 7:
                    mod.level.color = '#34ed72';
                    break;
                default:
                    mod.level.color = '#ffffff';
                    break;
            }   
        }
    }
    return mod;
}

/**
 * Defaults Options.
 * @param {object} ops
 * @returns {object} ops
 */
Defaults.prototype.defaultsOps = function(ops){
    if(typeof ops.useConsole === 'undefined'){
        ops.useConsole = true;
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
    if(typeof ops.modifiers === 'undefined'){
        ops.modifiers = this.defaultModifiers;
    }
    return ops;
}

module.exports = new Defaults;