var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.url === '/time') {

  //The server should respond to a request that will send back the current time of the server
    var d = new Date();
    res.write("server date and time is: " + d);
    res.end();
  }
  //TODO #2
  // respond to a get request where name is any single word string. It should send back a string that greets that name.

  //route for submitting name page and posting return greeting
  if (req.url === '/greet') {
    if (req.method === 'GET') {
      //serve form
      fs.readFile ( __dirname + '/yourname.html', function(err, data) {
        res.write(data);
        res.end();
      });

    }
    if (req.method === 'POST') {
      //post greeting
      var body = '';
      req.on( 'data', function(data) {
        body += data;
        console.log(body);
      });
      req.on( 'end', function() {
        var form = qs.parse(body);
        res.end( "Welcome to the world of tomorrow " + form.namebox);
      });
    }
  }
});

server.listen (3000, function (err) {
  if (err) throw err;
  console.log('*****listening on port 3000*****');
});

