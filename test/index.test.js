var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    useFile: false,
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

greenjay.emergency('hello');