var greenjay = require('../index');

greenjay.createLogger({
    useConsole: true,
    useFile: false,
    outputType: 'text' 
},{
    date: {
        color: '#069'
    },
    message: {
        modify: 'underline'
    },
    level: {
        color: 'white',
        bg: 'red'
    }
}
);

greenjay.emergency('hello');