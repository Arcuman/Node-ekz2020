let http = require('http');
let parseString = require('xml2js').parseString;
let xmlbuilder = require('xmlbuilder');

let studentscalc = (obj) => {
	let rc = '<result>parse error</result>'
	try {
		let xmldoc = xmlbuilder.create('result');
		xmldoc.ele('students').att('faculty', obj.students.$.faculty).att('spec', obj.students.$.spec)
			.ele('quantity').att('value', obj.students.student.length);
		rc = xmldoc.toString({ pretty: true });
		return rc;
	} catch (e) {
		console.log(e);
		console.log('ERRROOOOOOOOOOOOOOOOOOOOOOOOOR');
		return rc
	}
}
let handler = (req, res) => {
	let xmltxt = '';
	req.on('data', (data) => { xmltxt += data })
	req.on('end', () => {
		console.log(xmltxt);
		parseString(xmltxt, (err, result) => {
			if (err) {
				res.writeHead(400);
				res.end(err);
			}
			else {
				console.log('GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOd');
				console.log(result);
				res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
				res.write(studentscalc(result));
				res.end();
			}
		})
	})
}
http.createServer().listen(3000)
	.on('error', (e) => { console.log('error: ', e.code) })
	.on('request', handler);