var fs = require('fs');

/**
 * Handles All File Activity.
 * @param {string} path
 * @returns true or error
 */
function handleFiles(path){
    var rootLess = getRidOfRoot(path);
    var check = checkFolderPath(rootLess);
    if(check){
        var allPaths = separatePaths(rootLess);
        var isExist = checkFolderExists(allPaths.folder);
        if(!isExist){
            createFolder(allPaths.folder);
        }
        return createLogFile(allPaths.file, allPaths.folder);
    }else{
        return createLogFile(path);
    }
}

/**
 * Checks If Path Has A Folder Path.
 * @param {string} path 
 * @returns {boolean} hasFolderPath
 */
function checkFolderPath(path){
    var regex = /(.*)\//ig;
    if(regex.test(path)){
        return true
    }else{
        return false
    }
}

/**
 * Checks If Folder Exists.
 * @param {*} folderPath
 * @returns {object} Separeted Folder and File Paths. 
 */
function checkFolderExists(folderPath){
    return fs.existsSync(folderPath);
}

/**
 * Separates File Path And Folder Path.
 * @param {string} path 
 */
function separatePaths(path){
    var regex = /(.*)\/(.*)/ig;
    var separate = regex.exec(path);
    return {
        folder: separate[1],
        file: separate[2]
    }
}

/**
 * Checks and Crops ./ From Path.
 * @param {string} path
 * @returns {string} Cropped Path or Original One. 
 */
function getRidOfRoot(path){
    var regex = /^\.\/(.*)/ig
    return regex.test(path) ? regex.exec(path)[1]  : path
}

/**
 * Creates Folder If Does Not Exists.
 * @param {string} folderPath
 * @returns true or error
 */
function createFolder(folderPath){
    fs.mkdir(folderPath, err => {
        if(err){
            return err;
        }
        return true;
    });
}

/**
 * Creates Log File.
 * @param {string} logPath 
 * @param {string} folderPath 
 * @returns true or err
 */
function createLogFile(logPath, folderPath='./'){
    var wholePath = folderPath + logPath;
    fs.writeFile(wholePath, err => {
        if(err){
            return err;
        }
        return true;
    });
}

module.exports = handleFiles;