var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    useFile: false,
    outputType: 'text' 
},{
    date: {
        color: '#069',
        modify: 'dim',
        bg: '(83,11,39)'
    },
    message: {
        color: '(112,22,11)',
        modify: 'dim',
        bg: 'white'
    },
    level: {
        color: 'blue',
        modify: 'inverse',
        bg: '#77abce'
    }
}
);

greenjay.emergency('hello');