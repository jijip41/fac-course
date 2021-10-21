const db = require('../database/connection.js');

function get(request, response) {
  const posts = /*sql*/ `
  SELECT blog_posts.text_content, users.username
  FROM blog_posts
  INNER JOIN users
  ON blog_posts.user_id = users.id
  ORDER BY blog_posts.id DESC
  `;

  db.query(posts).then((result) => {
    const posts = result.rows;
    const postList = posts.map((post) => {
      return /*html*/ `
      <li>
      <p>Author: ${post.username}</p>
      <p>Content: ${post.text_content}</p>
      </li>
      `;
    });
    response.send(`<ul>${postList.join('')}</ul>`);
  });
}

module.exports = { get };
