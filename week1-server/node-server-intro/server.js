const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.set({
    'x-fake-header': 'my value',
    'x-another-header': 'another value',
  });
  response.status(200).send('Hello');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
