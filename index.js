var http  = require('http');
var process_request = require('./process_request');

var config = require('./config');
var service_config = require('./service_config');


// console.log( "config: ",  config );
// console.log( "service_config: ", service_config );

http.createServer(process_request).listen(config.port);
console.log('starting cloudflare api proxy, listing on port ' + config.port);
