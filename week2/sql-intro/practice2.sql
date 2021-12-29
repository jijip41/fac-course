BEGIN;

DROP TABLE IF EXISTS users, cats CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE
  );

CREATE TABLE cats (
  owner_id INTEGER REFERENCES users(id),
  cat_name TEXT NOT NULL UNIQUE
);

INSERT INTO users (username) VALUES('abc');

INSERT INTO cats (owner_id, cat_name) VALUES(1, 'cba');

COMMIT;