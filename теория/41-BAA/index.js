const fs = require('fs')


fs.openSync('./new.txt', 'w')
console.log('файл создан');

fs.unlinkSync('./new.txt')
console.log('файл удален');

fs.openSync('new1.txt', 'w')
console.log('файл создан');

//это асинхронно
fs.writeFile('new1.txt', 'qqq', (e) => {
	if (e) throw e;
	console.log('запись успешна');
})
//это тоже асинхронно
fs.appendFile('new1.txt', 'www', (e) => {
	if (e) throw e;
	console.log('добавление успешно');
})

fs.readFile('new1.txt', (e, data) => {
	if (e) console.log('Ошибка ', e)
	else console.log('data: ', data.toString('utf8'))
})

fs.rename('new1.txt', 'newReName.txt', (e) => {
	if (e) throw e;
	console.log('переименование успешно');
})
fs.writeFileSync('new1.txt', 'sync')
console.log('запись sync успешна');
fs.readFile('new1.txt', (e, data) => {
	if (e) console.log('Ошибка ', e)
	else console.log('data: ', data.toString('utf8'))
})