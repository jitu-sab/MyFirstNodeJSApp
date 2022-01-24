var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
<<<<<<< HEAD
   response.end('Hello NodeJS World\n');
=======
   response.end('Hello World DevOpsGurukul \n');
>>>>>>> 46c2cb30b6344cdb49a3ffcdcda7b3a0234d569d
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
