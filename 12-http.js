const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Its our history");
  }
  res.end(`<h1> Oops! </h1>
  <p> We cant find the page you are looking for </p>
  <a href="/"> back home <a>`);
});

server.listen(2000);
