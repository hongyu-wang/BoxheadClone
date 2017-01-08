// Load the TCP Library
var net = require('net');
var gameScript = require('./gameScript.js');


// Keep track of the chat clients
var clients = [];
var game = gameScript.clientState;

// Start a TCP Server
net.createServer(function (socket) {

  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort

  // Put this new client in the list
  clients.push(socket);
  socket.setNoDelay(true)
  socket.id = clients.indexOf(socket);

  // Send a nice welcome message and announce
  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the game\n", socket);

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
  	var parsed = JSON.parse(data);
  	parsed['id'] = socket.id;
	//console.log(parsed);
  	//update the game
  	game = gameScript.updateGame(parsed);

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

    	var jsoned = JSON.stringify(game) + "\n";

    	//process.stdout.write(jsoned)

      client.write(jsoned, "UTF-8")

      	// Log it to the server output too
    	//process.stdout.write(jsoned);
    });

  }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 5000\n");
