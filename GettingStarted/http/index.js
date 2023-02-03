/* const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
 */

const print = require("colorprint-js");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http
	.createServer((req, res) => {
		switch (req.url) {
			case "/":
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ hi: "welcome" }));
				break;
			case "/api":
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/plain");
				res.end("Welocome to api page");
			default:
				res.statusCode = 404;
				res.end();
				break;
		}
	})
	.listen(port, hostname, () =>
		print.bgbRed(`server started on http://${hostname}:${port}`),
	);
