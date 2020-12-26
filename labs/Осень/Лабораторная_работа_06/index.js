const { send, sendMessage } = require('m0603baa');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		const html = fs.readFileSync('./index.html')
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.end(html);
	}
	else if (req.method === 'POST' && req.url === '/send') {
		let data = '';
		req.on('data', (chunk) => data += chunk);
		req.on('end', () => {
			let obj = JSON.parse(data);
			sendMessage(obj.message, obj.sender, obj.receiver);
			res.writeHead(200, { 'Content-Type': 'application/json' })
			console.log(JSON.stringify(obj))
			res.end(JSON.stringify(obj));
		})
	}
	else if (req.method === 'GET' && req.url === '/task3') {
		send('task 3');
		res.end("Send");
	}
}).listen(5000);
console.log('start')