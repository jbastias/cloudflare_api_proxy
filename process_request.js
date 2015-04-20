var http  = require('http');
var https = require('https');
var url   = require('url');

var _     = require('underscore');

var querystring = require('querystring')

var config      = require('./config');
var service     = require('./service_config');



function createPayload(body){

  var default_obj = {
    tkn: service.token,
    email: service.email
  };

  return _.extend({}, default_obj, body);
}



function createPostOptions(postData){
  return {
    hostname: config.host,
    path: config.endpoint,
    method: config.method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };
}



module.exports = function (_req, _res) {

  var url_parts = url.parse( _req.url, true );
  if( url_parts.pathname !== '/' ) return;

  var postData = querystring.stringify(
    createPayload(_req.body)
  );

  var options = createPostOptions(postData);

  var proxy = https.request(options, function (res) {
    res.pipe(_res, {
      end: true
    });
  });

  // pass in payload
  proxy.write( postData );

  _req.pipe(proxy, {
    end: true
  });

}
