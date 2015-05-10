var http = require('http');
var port = process.argv[2];
var server = http.createServer(function(req,resp){
  /*  resp.header("Access-Control-Allow-Origin", "http://localhost:8080");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");*/
    resp.writeHead(200,{'Content-Type':'application/json',
		       "Access-Control-Allow-Origin":'*',
		       'Access-Control-Allow-Methods':'POST',
		       'Access-Control-Allow-Headers':'X-Requested-With, Content-Type'});
    value = {score:Math.random()*4}
    resp.end(JSON.stringify(value))

});

server.listen(port);
