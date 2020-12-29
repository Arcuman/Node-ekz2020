const sql = require('mssql')
const config = {
	user: 'Arcuman',
	password: 'Arcuman',
	server: 'localhost',
	database: 'BAA'
}
class DB {
	constructor() {
		this.connectionPool = new sql.ConnectionPool(config).connect().then(pool => {
			console.log('Connetct to DB')
			return pool;
		}).catch(err => console.log(err))
	}
	insertFaculty(faculty, facultyName) {
		return this.connectionPool.then(pool =>
			pool.request()
				.input('faculty', sql.NVarChar, faculty)
				.input('faculty_name', sql.NVarChar, facultyName)
				.query('INSERT FACULTY(FACULTY, FACULTY_NAME) values(@faculty , @faculty_name)')
		)
	}
}

const db = new DB();
db.insertFaculty('AFR1', 'JDSHY').then(res => {
	console.log(res)
});