const fs = require('fs')

fs.open('new.txt', 'w', (e, file) => {
	if (e) throw e;
	console.log('файл создан')
})
fs.access('new.txt', fs.constants.F_OK, (err) => {
	if (err) console.log('err')
	else console.log('Файл существует')
})

let str01 = 'Строка 01\nСтрока 02\nСтрока 03\n';
fs.writeFile('new.txt', str01, (e) => {
	if (e) throw e;
	console.log('Запись успешно выполнена')
	fs.copyFile('new.txt', 'newCopy.txt', (e) => {
		if (e) console.log(e);
		console.log('копия создана');
	})
})

fs.appendFile('new.txt', 'www', (e) => {
	if (e) throw e;
	console.log('добавление успешно');
})

fs.readFile('new.txt', (e, data) => {
	if (e) console.log('Ошибка ', e)
	else console.log('data: ', data.toString('utf8'))
})