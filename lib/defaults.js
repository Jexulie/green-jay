function Defaults(){}

Defaults.prototype.ops = {};

Defaults.prototype.defaultOptions = {
    useFile: false,
    filePath: './',
    outputType: 'text',
    defaultLevelColors: true,
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
    console.log(mod ,'-> defaults')
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
}

module.exports = new Defaults;