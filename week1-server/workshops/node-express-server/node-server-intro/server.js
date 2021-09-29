// Creating a server

const express = require('express');
const server = express();

// Handling requests
// -- add a route
// call our function for any http get requests to our home path.
// request: an object representing the incoming request
// response: an object representing the response that will eventually be sent

server.get('/', logger, (request, response) => {
  // Status code
  // response.status(404);

  // Headers - Express will automatically set some headers describing the response. e.g. content-type, content-length
  // Use response.set method

  // response.set('x-fake-header', 'my-value');
  // const time = new Date().toLocaleDateString();
  // response.send(`<h1>Hello, it's ${time}</h1>`);
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

// Dynamic route paths

server.get('/users/:blah', (request, response) => {
  const name = request.params.blah;
  response.send(`<h1>Hello ${name}</h1>`);
});

// Missing routes

// server.use((request, response) => {
// response.status(404).send(`<h1>Not found</h1>`);
// });

// Middleware
// Express route handlers don't have to send a response - they actually receive a third argument: the 'next' function
// Calling the next function tells express to move on to the next handler registered for the route.

// server.get('/', (request, response, next) => {
//   console.log(request.method + ' ' + request.url);
//   next();
// });

server.get('/', (request, response) => {
  response.send(`<h1>Hello, this is the next handler</h1>`);
});

function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

// Starting the server

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
