var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    useFile: false,
    filePath: 'dude/error.log',
    outputType: 'text' 
},{
    date: {
        color: 'green'
    },
    message: {
        color: '#069'
    },
    level: {
        // bg: '#ea3'
    }
}
);



greenjay.emergency('Some Emergency');
greenjay.alert('Some Alert');
greenjay.critical('Some Critical');
greenjay.error('Some Error');
greenjay.warning('Some Warning');
greenjay.info('Some Info');
greenjay.debug('Some Debug');
greenjay.trivial('Some Trivial');


