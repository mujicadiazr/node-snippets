var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

//Allow access to my static files
app.use('/css', express.static(__dirname+'/css'));

//Use body-parser middleware
app.use(bodyParser());
//Use body-parser middleware
app.use(cookieParser());


//Using cookie
app.get('/cookie', function (req, res) {
    res.cookie('myFirstCookie','This is the value');
    res.end('Got it!');
});

//Sending files
app.get('/', function (req, res) {
   res.sendFile('index.html', {'root': path.join(__dirname,'./templates')}); 
});

//POST
app.post('/', function (req, res) {
    res.end(JSON.stringify(req.body));
});

//Access to query: GET
app.get('/query', function (req, res) {
    res.end(JSON.stringify(req.query)); 
});
app.get('/query2', function (req, res) {
   var response = 'Hello, '+req.query.first;
   res.end(response); 
});

//Regular expresions
// app.get(/^(.+)$/, function (req, res) {
//     try {
//         if(fs.statSync(path.join(__dirname,'./templates/', req.params[0]+ '.html')).isFile()) {
//             res.sendFile(req.params[0]+'.html', {'root': path.join(__dirname,'./templates')});
//         }
//     } catch (error) {
//         res.sendFile('404.html', {'root': path.join(__dirname,'./templates')});
//     }         
// });

//Simple GET
app.get('/hello', function (req, res) {
   res.send('Hello there from Express!'); 
});

app.listen(3000, function () {
    console.log('Listening at port 3000');
})