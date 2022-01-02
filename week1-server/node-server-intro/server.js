const express = require('express');
const server = express();
const staticHandler = express.static('public');
const bodyParser = express.urlencoded();

server.use(staticHandler);

function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

// server.post('/submit', (request, response) => {
//   console.log('posted');
//   response.send('thanks for submitting');
// });

server.post('/submit', bodyParser, (request, response) => {
  console.log(request.body);
  response.send('thanks for submitting');
});

server.get('/', logger, (request, response) => {
  const time = new Date().toLocaleTimeString();
  response.set({
    'x-fake-header': 'my value',
    'x-another-header': 'another value',
  });
  response.status(200).send({
    message: `<h1>Hello World</h1> <p>I'm Jihye</p><p>It's ${time}</p>`,
  });
});

server.get('/redirects', (request, response) => {
  response.redirect('/');
});

server.get('/users/:name', (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});

server.use((request, response) => {
  response.status(404).send('Not found');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
