const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.status(404).send('Hello');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
