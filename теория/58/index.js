const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let POST_handler = (req, res) => {
    switch (url.parse(req.url).pathname) {
        case '/insert_faculties':
            let data_json = '';
            req.on('data', chunk => {
                data_json += chunk;
            });
            req.on('end', () => {
                data_json = JSON.parse(data_json);
                console.log(data_json)
                res.writeHead(200, {'Content-Type': 'application/json'});
                Db.insert_Faculty(data_json.FACULTY, data_json.FACULTY_NAME).then(records => {
                    res.end(JSON.stringify(data_json))
                }).catch(error => {
                    res.statusCode = 400;
                    res.statusMessage = 'Invalid method';
                    res.end(JSON.stringify({error: String(error)}));
                });
            });
            break;
        default:
            break;
    }
}

let http_handler = (req, res) => {
    switch (req.method) {
        case 'POST':
            POST_handler(req, res);
            break;
        default:
            break;
    }
}

//http://localhost:3002/insert_faculties
// {
//     "FACULTY": "www2",
//     "FACULTY_NAME": "1"
// }
let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);