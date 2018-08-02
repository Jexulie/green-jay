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
        bg: '#ea3'
    }
}
);


for(i = 0; i<10; i++){
    greenjay.emergency('omg ' + i)
}

