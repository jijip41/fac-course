const db = require('../database/connection.js');

function get(request, response) {
  db.query(
    /*sql*/
    `SELECT blog_posts.text_content, users.username FROM blog_posts JOIN users ON blog_posts.user_id = users.id;`
  ).then((result) => {
    console.log(result);
    const posts = result.rows;
    const postsList = posts
      .map(
        (post) =>
          `<li>User Name: ${post.username}, Content: ${post.text_content}</li>`
      )
      .join('');
    response.send(`<ul>${postsList}</ul>`);
  });
}

module.exports = { get };
