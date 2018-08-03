var greenjay = require('../index');

greenjay.createLogger();


greenjay.emergency('Some Emergency');
greenjay.alert('Some Alert',{date:{color:'#abc'}, message:{modify:'underline'}});
greenjay.critical('Some Critical');
greenjay.error('Some Error');
greenjay.warning('Some Warning',{date:{color:'#010'}, message:{modify:'underline'}});
greenjay.info('Some Info',{date:{color:'#122'}, level:{color:'blue'}});
greenjay.debug('Some Debug');
greenjay.trivial('Some Trivial');


