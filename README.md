# vanilla-http-server
a node http server without middleware that responds to several routes. 
The server responds to a request to /time that will send back the current time of the server.
It responds to a get request to /greet/name where name is any single word string. It should send back a string that greets that name.
It has a separate post request to /greet that takes the name in JSON format.
There are tests using chaiHTTP for both routes, as well as a Gruntfile/package.json
