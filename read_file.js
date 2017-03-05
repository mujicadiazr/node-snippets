var fs = require('fs');

fs.readFile('file.txt','utf8',function (error, data) {
    if (error) throw error
    else console.log('Async: '+ data);
});

data = fs.readFileSync('file.txt','utf8');
console.log('Sync: '+ data);
