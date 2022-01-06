const { request, response } = require('express');
const express = require('express');
const dogs = require('./dogs.js');

const server = express();

server.get('/', (request, response) => {
  const search = request.query.search || '';
  let list = '';
  for (const dog of Object.values(dogs)) {
    const match = dog.name.toLowerCase().includes(search.toLowerCase());

    if (match || !search) {
      list += `<li>${dog.name}</li>`;
    }
  }

  // Forms can make GET requests
  // By default a form sends a GET request to the current page when submitted
  // Form will find all the inputs within the form and add them into the “search” part of the URL
  // e.g. GET example.com?myMessage=whatevertheusertyped HTTP/1.1
  // the bit after ? is a “search” part of the URL
  // Each input is added to the search string in this format: ${inputName}=${inputValue}
  // !!!! need a name attribute for input !!!!

  // Express automatically parses the “search” part of the URL for each request. You can access this object at request.query

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h1>Dogs!</h1>
      <form>
        <label id="search">Search dogs</label>
        <input id="search" type="search" name="search" placeholder="E.g. rover">
        <button>Search</button>
      </form>
      <ul>${list}</ul>
    </body>
  </html>
  `;
  response.end(html);
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
