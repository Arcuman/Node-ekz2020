const sql = require('mssql');
const config = {
	user: 'Arcuman',
	password: 'Arcuman',
	server: 'localhost',
	database: 'BAA',
	"options": {
		"encrypt": true,
		"enableArithAbort": true
	}
}

class DataBase {
	constructor() {
		this.connectionPool = new sql.ConnectionPool(config).connect().then(pool => {
			console.log('Connected to MS SQl')
			return pool;
		}).catch(err =>
			console.log('Connection Failed', err));
	}

	getFaculties(faculty) {
		return this.connectionPool.then(pool => pool.request()
			.input('faculty', sql.NVarChar, faculty)
			.query('Select * from FACULTY Where FACULTY = @faculty')
		)
	}
}
module.exports = DataBase;