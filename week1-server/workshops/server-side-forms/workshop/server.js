// Server setup

const express = require('express');
const dogs = require('./dogs.js');

const server = express();

server.get('/', (request, response) => {
  searchItem = request.query.search || '';
  let items = '';

  for (const dog of Object.values(dogs)) {
    if (searchItem.toLowerCase() === dog.name.toLowerCase()) {
      items += `<li>${dog.name}</li>`;
    } else if (searchItem === '') {
      items += `<li>${dog.name}</li>`;
    }
  }
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <ul>${items}</ul>
      <form>
      <input name="search"></input>
      <button>Search</button>
      </form>
    </body>
  </html>
  `;

  response.send(html);
});

// GET requests

// Browsers support two types of HTTP requests: GET and POST
// When user navigates -> the browser will send a GET request, then render the response
// Certain HTML tags trigger GET requests: <img> <form>...

// By default a form send a GET request to the current page.
// It will find all the inputs within the form and add them into the 'search' part of the URL(after '?')
// Each input is added to the search string in this format : ${inpurName}=${inputValue}

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
