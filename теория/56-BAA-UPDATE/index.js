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
	put_Faculties(faculty, facultyName) {
		return this.connectionPool.then(pool =>
			pool.request()
				.input('faculty', sql.NVarChar, faculty)
				.input('faculty_name', sql.NVarChar, facultyName)
				.query('UPDATE FACULTY SET FACULTY_NAME = @faculty_name WHERE FACULTY = @faculty')
		)
	}
}

const db = new DB();
db.put_Faculties('AFR1', 'JDSHY1').then(res => {
	console.log(res)
});