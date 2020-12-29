const DB = require('./DB');
const Db = new DB();

Db.getFaculties('ХТиТ').then(records => {
	console.log(records.recordset);
});