let http = require('http');
let stat = require('./m0701')('./static');
let http_handler = (request, response) => {
	if (request.method === 'GET') {
		if (stat.isValid('html', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'text/html; charset=utf-8' });
		else if (stat.isValid('css', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'text/css; charset=utf-8' });
		else if (stat.isValid('js', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'text/javascript; charset=utf-8' });
		else if (stat.isValid('png', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'image/png; charset=utf-8' });
		else if (stat.isValid('docx', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'application/msword; charset=utf-8' });
		else if (stat.isValid('json', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'application/json; charset=utf-8' });
		else if (stat.isValid('xml', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'application/xml; charset=utf-8' });
		else if (stat.isValid('mp4', request.url))
			stat.sendFile(request, response, { 'Content-Type': 'video/mp4; charset=utf-8' });
		else stat.writeHTTP404(response);
	}
	else {
		response.statusCode = 405;
		response.statusMessage = 'Invalid method';
		response.end("HTTP ERROR 405: Invalid method");
	}
};

let server = http.createServer();
server.listen(5000, () => { console.log('Server running at http://localhost:5000/index.html') })
	.on('error', (e) => { console.log('Server running at http://localhost:5000/: error', e.code) })
	.on('request', http_handler);