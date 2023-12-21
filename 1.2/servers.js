const http = require("http");
const port = 9000;
const fs = require("fs");

const handel = (req, res) => {
  let page = "";
  switch (req.url) {
    case "/":
      page = "./index.html";
      break;
    case "/home":
      page = "./home.html";
      break;
    case "/about":
      page = "./about.html";
      break;
    case "/product":
      page = "./product.html";
      break;
    case "/contact":
      page = "./contact.html";
      break;
    default:
      res.end("404 - Page Not Found");
      break;
  }
  fs.readFile(page, (err, data) => {
    if (err) {
      console.log(`404, page not found`);
      //   res.end('404,page not found')
      return false;
    }
    res.end(data);
  });
};

const server = http.createServer(handel);

server.listen(port, (err) => {
  if (err) {
    console.log("404,page not found ");
    return false;
  }
  console.log(`server start on port no ${port}`);
});
