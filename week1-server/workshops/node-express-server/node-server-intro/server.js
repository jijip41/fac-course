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

  // response.set('x-fake-header', 'my-value');
  // const time = new Date().toLocaleDateString();
  // response.send(`<h1>Hello, it's ${time}</h1>`);
  response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
    </html>`);
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

// server.get('/', (request, response) => {
//   response.send(`<h1>Hello, this is the next handler</h1>`);
// });

function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

// Static files
// It's common to have some static files that don't change for each request. E.g. CSS, images, HTML pages
// Express includes a built-in middleware for serving a directory of files: express.static
// Directory named public is where we keep all the files sent to the client.

server.use(express.static('public'));

// Post requests
// Deal with forms submitting user data to the server

const bodyParser = express.urlencoded();
server.post('/submit', bodyParser, (request, response) => {
  console.log('posted');
  response.send('thanks for submitting');
});

// Starting the server

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
