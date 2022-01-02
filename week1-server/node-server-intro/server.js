const express = require('express');
const server = express();

server.get('/', (request, response) => {
  const time = new Date().toLocaleTimeString();
  response.set({
    'x-fake-header': 'my value',
    'x-another-header': 'another value',
  });
  response.status(200).send({
    message: `<h1>Hello World</h1> <p>I'm Jihye</p><p>It's ${time}</p>`,
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
