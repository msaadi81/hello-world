var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200);
	response.write('hello World');
	response.end();
}).listen(8080);

console.log('listening 8080');