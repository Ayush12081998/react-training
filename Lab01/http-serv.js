var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    if (req.url == "/") {
      res.write("Hello World!");
    } else if (req.url == "/html") {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World!</h1>");
    } //write a response to the client
    res.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8080
