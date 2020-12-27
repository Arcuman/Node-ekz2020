const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let GET_handler = (req, res) => {
    switch (url.parse(req.url).pathname) {
        case '/faculties':
            let faculty = url.parse(req.url, true).query.faculty;
            //console.log(faculty)
            Db.get_Faculties(faculty).then(records => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', '*');
                res.end(JSON.stringify(records.recordset))
            }).catch(error => {
                res.statusCode = 400;
                res.statusMessage = 'Invalid method';
                res.end(JSON.stringify({error: String(error)}));
            });
            break;
        default:
            break;
    }
}

let http_handler = (req, res) => {

    console.log(req.method);
    switch (req.method) {
        case 'GET':
            GET_handler(req, res);
            break;
        default:
            break;
    }
}

//http://localhost:3002/faculties?faculty=<faculty_name>
let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);