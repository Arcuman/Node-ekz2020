setTimeout(() => {
	console.log('1');
}, 0)
setImmediate(() => {
	console.log('2');
})
let interval = setInterval(() => {
	console.log('3');
})
interval.unref();
process.nextTick(() => {
	console.log('4');
}, 0);
