var greenjay = require('../index');

greenjay.createLogger({
    useConsole: false,
    useFile: true,
    filePath: './error.log',
    outputType: 'text' 
},{
    date: {
        color: 'blue',
        modify: 'underline',
        bg: '#069'
    },
    message: {
        modify: 'dim'
    },
    level: {
        bg: '#77abce'
    }
}
);

greenjay.emergency('hello ');
// for(i = 0; i< 10;i++){
    
// }