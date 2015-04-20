var fs = require('fs');
var service_base_name = 'service_config';
var service = {};

try{
  service     = require('./' + service_base_name + '.json');
} catch (err){

  var content = {
      "token": "<TOKEN>",
      "email": "<EMAIL>"
  };

  var theContent = JSON.stringify(content);

  fs.writeFile('./' + service_base_name + '.json', theContent, function(error){
    if (error) throw error;
    console.log('please replace the values <TOKEN> and <EMAIL> with the your own token and email values in the file ' + service_base_name + '.json');
  });

  service = content;
}

module.exports = service;
