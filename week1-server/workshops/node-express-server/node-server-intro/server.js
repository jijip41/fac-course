// Creating a server

const express = require('express');
const server = express();

// Handling requests
// -- add a route
// call our function for any http get requests to our home path.
// request: an object representing the incoming request
// response: an object representing the response that will eventually be sent

server.get('/', (request, response) => {
  response.send('hello');
});

// Starting the server

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
