SELECT username from users;

SELECT username, location from users;

SELECT * from users WHERE age > 40;

SELECT first_name, last_name, location from users WHERE location = 'Saxilby, UK' AND age > 40;

SELECT user_id, text_content FROM post_comments WHERE user_id IN (2, 3);

SELECT user_id, text_content FROM blog_posts WHERE id IN (2, 3);

INSERT INTO blog_posts(text_content, user_id) VALUES('Hello World', 1) RETURNING text_content, user_id;


UPDATE blog_posts SET user_id = 2 WHERE text_content = 'Hello World';
SELECT user_id FROM blog_posts WHERE text_content='Hello World';


SELECT users.location, post_comments.text_content FROM users LEFT JOIN post_comments ON users.id = post_comments.user_id;





SELECT blog_posts.text_content, post_comments.text_content FROM blog_posts INNER JOIN post_comments ON blog_posts.user_id = post_comments.post_id;


SELECT blog_posts.text_content, post_comments.text_content, users.username
  FROM blog_posts
  INNER JOIN post_comments INNER JOIN users ON users.id = post_comments.user_id ON blog_posts.id = post_comments.post_id;
  


INSERT INTO post_comments (post_id, user_id text_content) VALUES((SELECT id FROM blog_posts WHERE blog_posts.text_content = 'Peculiar trifling absolute and wandered vicinity property yet.'),3, 'Interesting post');


