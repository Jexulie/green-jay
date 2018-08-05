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
            filePath: './logs/errors.log',
            minLevel: 'error'
        })
    ]
});


greenjay.emergency('Some Emergency');
greenjay.alert('Some Alert');
greenjay.critical('Some Critical');
greenjay.error('Some Error');
greenjay.warning('Some Warning');
greenjay.info('Some Info');
greenjay.debug('Some Debug');
greenjay.trivial('Some Trivial');

 