var greenjay = require('../index');

greenjay.createLogger({
    outputType: 'json',
    modifiers:{
        date: {
            color: '#069'
        },
        message: {
            modify: 'underline'
        }
    },
    logs: [
        new greenjay.logger({
            filePath: './log/errors.log',
            minLevel: 'trivial'
        })
    ]
});


var obj = {
    data: 123
}

var num = 32;

var f = x => {
    return x**x
}

var b = true

//JSON.stringify(obj)

var arr = [1,'dude', false, y => y / 2, {date: '01.01.2005'}]



// greenjay.emergency(arr);
greenjay.alert(arr);
// greenjay.critical(obj);
// greenjay.error('Some Error');
// greenjay.warning('Some Warning');
// greenjay.info('Some Info');
// greenjay.debug('Some Debug');
// greenjay.trivial('Some Trivial');

 