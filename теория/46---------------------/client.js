const http = require('http')
const fs = require('fs')

const ws = fs.createWriteStream("new.txt")

let options = {
    host: 'localhost',
    path: '/new.txt',
    port: 3000,
    method: 'GET'
}
const req = http.request(options, (res) => {
    res.pipe(ws)
})
req.end()