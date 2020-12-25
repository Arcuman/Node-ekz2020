let http = require('http')

http.createServer((request, response) => {
	switch (request.method) {
		case 'GET':
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.end('<h1>Hello World</h1>\n');
			break;
		case 'POST':
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.end(`<h1>Method ${request.method} url ${request.headers.host}/{request.url} body ${JSON.stringify(request.headers)}</h1>\n`);
			break;
		default:
			response.writeHead(405, {
				'Content-Type': 'text/html'
			});
			response.end('<h1>Not allowed</h1>\n');

	}
}).listen(3000);

console.log('Server running at localhost:3000')