const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send('Hello');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
