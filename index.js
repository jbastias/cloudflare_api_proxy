var http    = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');

var process_request = require('./process_request');
var config = require('./config');
// var service_config = require('./service_config');

var app = connect();
app.use( bodyParser.urlencoded({ extended: true } ) );
app.use( process_request );


















// console.log( "config: ",  config );
// console.log( "service_config: ", service_config );

http.createServer(app).listen(config.port);
console.log('starting cloudflare api proxy, listing on port ' + config.port);
