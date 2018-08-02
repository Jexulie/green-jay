var fs = require('fs');

// handles all file funcs
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

// check if path has a folder path
function checkFolderPath(path){
    var regex = /(.*)\//ig;
    if(regex.test(path)){
        return true
    }else{
        return false
    }
}

// check if folder exists
function checkFolderExists(folderPath){
    return fs.existsSync(folderPath);
}

// separate file path and folder path
function separatePaths(path){
    var regex = /(.*)\/(.*)/ig;
    var separate = regex.exec(path);
    return {
        folder: separate[1],
        file: separate[2]
    }
}

// take out ./ from path
function getRidOfRoot(path){
    var regex = /^\.\/(.*)/ig
    return regex.test(path) ? regex.exec(path)[1]  : path
}

function createFolder(folderPath){
    fs.mkdir(folderPath, err => {
        if(err){
            return err;
        }
        return true;
    });
}

// creates log file
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