var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    useFile: false,
    outputType: 'text' 
},{
    date: {
        color: '#069',
        modify: 'underline',
        bg: '(1,1,1)'
    },
    message: {
        modify: 'dim'
    },
    level: {
        bg: '#77abce'
    }
}
);

greenjay.emergency('hello');