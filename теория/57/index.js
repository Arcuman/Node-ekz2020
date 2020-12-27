const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let DELETE_handler = (req, res) => {
    let path = url.parse(req.url).pathname;
    let path_mas= path.split('/');
    switch ('/' + path_mas[1]) {
        case '/faculties':
            console.log(path_mas[2])
            res.writeHead(200, {'Content-Type': 'text/plain'});
            Db.delete_Faculties(path_mas[2]).then(records => {
                res.end('deleted')
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
    switch (req.method) {
        case 'DELETE':
            DELETE_handler(req, res);
            break;
        default:
            break;
    }
}

//http://localhost:3002/faculties/<FACULTY>
let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);