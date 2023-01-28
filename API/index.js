const http = require("http");

http
	.createServer((req, res) => {
		switch (req.url) {
			case "/":
				res.writeHead(200).write("Hello World i am at HomePage");
				res.end();
				break;
			case "/about":
				res.writeHead(200).write("Hello World i am at About_Page");
				res.end();
				break;
			case "/contact":
				res.writeHead(200).end("Hello World i am at Contact_Page");
				//we can also write like this
				break;
			default:
				res.writeHead(404).end();
				break;
		}
	})
	.listen(3000, () => console.log("Server is running on Port 3000"));
