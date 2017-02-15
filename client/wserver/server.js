// 1.  Very simple websocket server:
// 	1a. Echo incoming message to all connected clients
// 	1b. Generate random numbers and emit to connected clients
var ws = require('nodejs-websocket');

// 2. Server for incoming/outgoing chats
var chatServer = ws.createServer(function (conn) {
	console.log('New Chat connection established.', new Date().toLocaleTimeString());
	conn.on('text', function (msg) {
		// simple object transformation (= add current time)
		var msgObj = JSON.parse(msg);
		msgObj.newDate = new Date().toLocaleTimeString();
		var newMsg = JSON.stringify(msgObj);

		// echo message including the new field to all connected clients
		chatServer.connections.forEach(function (conn) {
			conn.sendText(newMsg);
		});
	});
	conn.on('close', function (code, reason) {
		console.log('Chat connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
	});

	conn.on('error', function (err) {
		// only throw if something else happens than Connection Reset
		if (err.code !== 'ECONNRESET') {
			console.log('Error in Chat Socket connection', err);
			throw  err;
		}
	})
}).listen(3005, function () {
	console.log('Chat socketserver running on localhost:3005');
});
