var fs = require('fs');

fs.writeFile('new_file.txt','Some new text for the new file.', function (error) {
    if (error) throw error;
    else console.log('Async: File written succesfully!');
});

fs.writeFileSync('new_file_sync.txt','Some data for the Sync file.');
console.log('Sync: File written succesfully!');
