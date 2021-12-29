-- Challenge 1: retrieving data
-- 1. Select specific columns 

SELECT username, location FROM users;


-- 2. Select users conditionally 

SELECT * FROM users WHERE age > 40;


-- 3. Select users using multiple conditions 

SELECT first_name, last_name, location FROM users WHERE age > 40 AND location = 'Saxilby, UK';


-- 4. Select posts using multiple conditions 

SELECT user_id, text_content FROM blog_posts WHERE user_id IN (2, 3);