const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to my site</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
  </html>
  `);
});
server.get('/about', (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About this page</title>
    </head>
    <body>
      <h1>About</h1>
    </body>
  </html>
  `);
});
server.get('/sign-up', (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to my site</title>
    </head>
    <body>
      <h1>Sign-up</h1>
    </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});
