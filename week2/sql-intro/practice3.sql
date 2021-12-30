-- Challenge 1: retrieving data
-- 1. Select specific columns 

SELECT username, location FROM users;


-- 2. Select users conditionally 

SELECT * FROM users WHERE age > 40;


-- 3. Select users using multiple conditions 

SELECT first_name, last_name, location FROM users WHERE age > 40 AND location = 'Saxilby, UK';


-- 4. Select posts using multiple conditions 

SELECT user_id, text_content FROM blog_posts WHERE user_id IN (2, 3);




-- Challenge 2: Creating and updating data 

-- 1. Adding a new post 

INSERT INTO blog_posts (user_id, text_content) VALUES(1, 'Hello World') RETURNING user_id, text_content;


-- 2. Updating an existing post

UPDATE blog_posts SET user_id = 2 WHERE text_content = 'Hello World' RETURNING user_id;
