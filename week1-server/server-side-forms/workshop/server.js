const { request, response } = require('express');
const express = require('express');
const dogs = require('./dogs.js');

const server = express();

server.get('/', (request, response) => {
  let list = '';
  for (const item of Object.values(dogs)) {
    list += `<li>${item.name}</li>`;
  }
  response.send(`<ul>${list}</ul>`);
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
