let http = require('http');
const fs = require('fs')

let handler = (req, res) => {

	const ws = fs.createWriteStream('./MyText2.dat')

	req.pipe(ws);
}

http.createServer().listen(3000)
	.on('request', handler);
console.log("start")