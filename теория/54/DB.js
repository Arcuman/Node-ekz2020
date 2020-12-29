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
	get_Faculties(faculty) {
		return this.connectionPool.then(pool => pool.request()
			.input('faculty', sql.NVarChar, faculty)
			.query('Select * FROM FACULTY Where FACULTY = @faculty'))
	}
}
module.exports = DataBase;