//асинхронность + callback
const fs = require('fs');
function a(callback) {
	setTimeout(() => {
		console.log('result of a');
		callback();
	}, 1000)
}
function b(callback) {
	setTimeout(() => {
		console.log('result of b');
		callback();
	}, 1000)
}

a(() => console.log('a() is done'));
console.log('end a')
b(() => console.log('b() is done'));
console.log('end b');
//callback hell
(
	() => {
		let arrOfarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
		arrOfarr.forEach((arr) => {
			arr.forEach((number) => {
				//next callback operation
				console.log(number);
			})
		})
	}
)();
//разбитие на функции
function printNumber(number) {
	console.log(number);
}
function pringNumberFromArray(arr) {
	arr.forEach((number) => {
		printNumber(number);
	})
}
function printArrayOfArray(arrOfarr) {
	arrOfarr.forEach((arr) => {
		pringNumberFromArray(arr);
	})
}
let arrOfarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
printArrayOfArray(arrOfarr)

const path = './MyFile.txt';
const newpath = './MyFile1.txt';

const appendFIle = (err1) => {
	if (err1) throw err1;
	else {
		fs.appendFile(path, '2222', (err1) => {
			if (err1) throw err1;
			else {
				fs.rename(path, newpath, (err1) => {
					if (err1) throw err1;
					else {

					}
				})
			}
		})
	}
}
const writeFile = (err) => {
	if (err) throw err;
	else {
		fs.writeFile(path, '1111', appendFIle);
	}
}

fs.access(path, fs.constants.W_OK, writeFile)

//либо вынести это все в отдельный модуль и сделать
module.export = writeFile;



