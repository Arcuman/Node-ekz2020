const fs = require('fs');

let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 3 * 100);
});

p.then((result) => {
	console.log(result); // 10
	return result * 2;
}).then((result) => {
	console.log(result); // 20
	return result * 3;
}).then((result) => {
	console.log(result); // 60
	return result * 4;
})
	.catch()
	.finally(() => console.log('finaly'));


Promise.all(
	[
		new Promise((res, rej) => res(2)),
		new Promise((res, rej) => res(1))
	]
).then(res => console.log('then:', res))
	.catch((err) => console.log('here1:', err))


