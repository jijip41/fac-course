// Creating a server

const express = require('express');
const server = express();

// Handling requests
// -- add a route
// call our function for any http get requests to our home path.
// request: an object representing the incoming request
// response: an object representing the response that will eventually be sent

server.get('/', (request, response) => {
  // Status code
  // response.status(404);

  // Headers - Express will automatically set some headers describing the response. e.g. content-type, content-length
  // Use response.set method
  response.set('x-fake-header', 'my-value');
  const time = new Date().toLocaleDateString();
  response.send(`<h1>Hello, it's ${time}</h1>`);
  response.send('hello');
});

// JSON body
// HTTP response bodies are always strings, so Express will automatically convert our object to a JSON string for us.

server.get('/json', (request, response) => {
  response.send({ message: 'Hello' });
});

// Redirects

server.get('/redirects', (request, response) => {
  response.redirect('/');
});

// Starting the server

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
