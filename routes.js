const fs = require("fs");

function requestHandler(req, res) {
	const url = req.url;
	const method = req.method;

	//Routing request
	if (url === "/") {
		res.write('<html lang="en">');
		res.write("<head><title>Enter message</title></head>");
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>',
		);
		res.write("</html>");
		return res.end();
	}

	//Redirection request => Streams and Buffers
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk); //we're not changing the value of the const rather we're inserting data into it as it's an array so we use push method
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split("=")[1];
			//fs.writeFileSync('message.txt', message); //synchronous method
			fs.writeFile("message.txt", message, (err) => {
				//asynchronous nature
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write('<html lang="en">');
	res.write("<head><title>My first page</title></head>");
	res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
	res.write("</html>");
	res.end();
}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hardcoded text',
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hardcoded text';

exports.handler = requestHandler;
exports.someText = "Some hardcoded text";
