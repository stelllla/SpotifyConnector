var ws = require('nodejs-websocket');

var chatServer = ws.createServer(function (conn) {
	console.log('New Chat connection established.', new Date().toLocaleTimeString());
	conn.on('text', function (msg) {

		var msgObj = JSON.parse(msg);
		msgObj.newDate = new Date().toLocaleTimeString();
		var newMsg = JSON.stringify(msgObj);

		chatServer.connections.forEach(function (conn) {
			conn.sendText(newMsg);
		});
	});
	conn.on('close', function (code, reason) {
		console.log('Chat connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
	});

	conn.on('error', function (err) {
		if (err.code !== 'ECONNRESET') {
			console.log('Error in Chat Socket connection', err);
			throw  err;
		}
	})
}).listen(3005, function () {
	console.log('Chat socketserver running on localhost:3005');
});
