var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    stopProgramAbove: 'alert',
    modifiers: {
        date:{
            color: '(152,185,52)'
        },
        message: {
            modify: 'underline'
        }
    },
    logs: [
        new greenjay.logger({
            filePath: './log/warns.log',
            minLevel: 'warning'
        }),
        // new greenjay.logger({
        //     filePath: './log/trivial.log',
        //     minLevel: 'trivial'
        // }),
        // new greenjay.logger({
        //     filePath: './log/info.log',
        //     minLevel: 'info'
        // }),
        // new greenjay.logger({
        //     filePath: './log/error.log',
        //     minLevel: 'error'
        // }),
        // new greenjay.logger({
        //     filePath: './log/emergency.log',
        //     minLevel: 'emergency'
        // }),
        // new greenjay.logger({
        //     filePath: './log/alert.log',
        //     minLevel: 'alert'
        // })
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

 