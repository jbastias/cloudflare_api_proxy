var http  = require('http');
var https = require('https');
var url   = require('url');

var config = require('./config');

var service = require('./service_config');


console.log(">> ", service);


module.exports = function (_req, _res) {

  var url_parts = url.parse( _req.url, true );
  if( url_parts.pathname !== '/' ) return;
  var query_vars = url_parts.query;
  console.log("query_vars: ", query_vars);

  var options = {
    hostname: config.host,
    path: config.endpoint,
    method: config.method
  };

  var proxy = https.request(options, function (res) {
    res.pipe(_res, {
      end: true
    });
  });

  _req.pipe(proxy, {
    end: true
  });
}
