var http = require('http');

var server = http.createServer(engine).listen(3000);

function engine(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey there, from a the simplest http server. :)');
}