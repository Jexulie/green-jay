/**
 * Generates Date and Returns String Date.
 * @returns {string} Date.
 */
function getDate(){
    var now = new Date();
    
    // TODO: date format selection.

    return now.toLocaleString();
}

module.exports = getDate;