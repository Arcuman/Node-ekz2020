const sql = require('mssql')
var config = {
    user: 'Vad',
    password: 'Vad',
    server: 'localhost',
    database: 'GVA',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};

class DataBase {
    constructor() {
        this.connectionPool = new sql.ConnectionPool(config).connect().then(pool => {
            console.log('Connected to MSSQL')
            return pool
        }).catch(err => console.log('Connection Failed: ', err));
    }
    put_Faculties(faculty, faculty_name){
        return this.connectionPool.then(pool => {
            return pool.request()
                .input('faculty', sql.NVarChar, faculty)
                .input('faculty_name', sql.NVarChar, faculty_name)
                .query('UPDATE FACULTY SET FACULTY_NAME = @faculty_name WHERE FACULTY = @faculty');
        });
    }
}
module.exports = DataBase;