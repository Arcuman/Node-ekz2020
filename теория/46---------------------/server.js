http = require('http')
fs = require('fs')


let rs = require('fs').createReadStream('./file.txt');

http.createServer((req, res) =>{
    if(req.method == "GET"){
        let dat = '';

        req.on('data', chunk => {
            dat += chunk;
        });
        req.on('end', () => {

            res.writeHead(200, {
                'Content-Type': 'text/plain; charset=utf-8',
                'Content-Disposition': 'form-data; filename="file.txt"'
            });
            fs.createReadStream('./file.txt').pipe(res);
        });
    }
}).listen(3000)