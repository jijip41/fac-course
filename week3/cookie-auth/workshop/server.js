const express = require('express');

const server = express();

server.get('/', (request, response) => {
  // Reading a cookie
  const cookies = request.get('cookie');
  console.log(cookies);
  response.send('<h1>Hello</h1>');
});

// Setting a cookie
server.get('/example', (request, response) => {
  response.set(
    'set-cookie',
    "Hi=Jihye's cookie; HttpOnly; Max-Age=60; SameSite=Lax"
  );
  response.redirect('/');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
