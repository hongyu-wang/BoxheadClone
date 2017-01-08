// Load the TCP Library
var net = require('net');
var gameScript = require('./gameScript.js');


// Keep track of the chat clients
var clients = [];
var p1 = {},
	p2 = {},
	bullets = {};

// Start a TCP Server
net.createServer(function (socket) {

  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort

  // Put this new client in the list
  clients.push(socket);
  socket.setNoDelay(true)
  socket.id = clients.indexOf(socket);

  // Init
  var init = {
  	"id": socket.id,
  	"terList": gameScript.terrain["terList"]
  }
  socket.write(JSON.stringify(init)+"\n");

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
  	var parsed = JSON.parse(data);
  	parsed['id'] = socket.id;
	//console.log(parsed);
  	//update the game
  	gameScript.updateGame(parsed);
		p1 = gameScript.player1;
		p2 = gameScript.player2;
		bullets = gameScript.bulletArray;
  	//console.log(gameScript.player1)
  	//console.log(gameScript.player2)
  	//console.log(gameScript.bulletarray)
	//process.stdout.write(JSON.stringify(parsed));
	//process.stdout.write(JSON.stringify(game));
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
  	clients.splice(socket.id, 1);
  });

  var t = setInterval(broadcast,100);
  // Send a message to all clients
  function broadcast() {

  	clients.forEach(function (client) {

  		var json1 = JSON.stringify(p1) + "\n"

  		var json2 = JSON.stringify(p2) + "\n"
			var json3 = JSON.stringify(bullets) + "\n"
    	//process.stdout.write(jsoned)

    	client.write(json1)
    	client.write(json2)
    	client.write(json3)


    });

  }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 5000\n");

//module.exports.create = create;
