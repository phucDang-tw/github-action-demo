var http = require("http");

console.log("Server is running");
//create a server object:
http
  .createServer(function (req, res) {
    res.write(`
  ${process.env.SOME_CONFIG}
  ${process.env.SOME_SECRET}
  ${process.env.SAME_SECRET}
  `); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
