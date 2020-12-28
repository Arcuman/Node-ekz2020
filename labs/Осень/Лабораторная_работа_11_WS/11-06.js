const rssWSS = require("rpc-websockets").Server;

const server = new rssWSS({ port: 4000, host: "localhost" });

server.event("A");
server.event("B");
server.event("C");

console.log("Type A, B or C to fire such events");

let input = process.stdin;
input.setEncoding("utf-8");
process.stdout.write("> ");

input.on("data", (data) => {
	switch (data.trim()) {
		case 'A':
			server.emit('A');
			break;
		case 'B':
			server.emit('B');
			break;
		case 'C':
			server.emit('C');
			break;
	}
	process.stdout.write("> ");
});
