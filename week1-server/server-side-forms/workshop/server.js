const { request, response } = require('express');
const express = require('express');
const dogs = require('./dogs.js');

const server = express();

server.get('/', (request, response) => {
  response.send('<ul>hello</ul>');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
