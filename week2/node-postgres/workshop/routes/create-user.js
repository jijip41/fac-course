const db = require('../database/connection');

function get(request, response) {
  response.send(/*html*/ `
    <form action="create-user" method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="age">Age</label>
        <input id="age" name="age" type="number">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `);
}

function post(request, response) {
  const user = request.body;
  const INSERT_USER = `INSERT INTO users(username, age) VALUES($1, $2)`;

  db.query(INSERT_USER, [user.username, user.age]);
  response.redirect('/');
}

module.exports = { get, post };
