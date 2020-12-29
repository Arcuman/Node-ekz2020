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
	deleteFaculties(faculty) {
		return this.connectionPool.then(pool =>
			pool.request()
				.input('faculty', sql.NVarChar, faculty)
				.query('DELETE FROM FACULTY WHERE FACULTY = @faculty')
		)
	}
}

const db = new DB();
db.deleteFaculties('AFR1').then(res => {
	console.log(res)
});