var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function (first_name, last_name) {
    console.log('Event fired! Hi, '+first_name+' '+last_name);    
});

eventEmitter.on('myCustomEvent', function (first_name, last_name, age) {
    console.log('Event fired! Hi, '+first_name+' '+last_name+' '+age);    
});

setTimeout(function () {
    eventEmitter.emit('myCustomEvent', 'Juan', 'Pepe', 26);
}, 2000);