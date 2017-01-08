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
  id = clients.indexOf(socket);

  // Send a nice welcome message and announce
  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the game\n", socket);

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
  	data['id'] = socket.id;
  	var parsed = JSON.parse(data);
  	//update the game
  	game = gameScript.updateGame(parsed);
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    clients.splice(socket.id, 1);
  });
  
  var t = setInterval(broadcast,16.6);
  // Send a message to all clients
  function broadcast() {
    clients.forEach(function (client) {
    	var jsoned = JSON.stringify(game);
      	client.write(jsoned);

      	// Log it to the server output too
    	process.stdout.write(jsoned);
    });
    
  }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 5000\n");