START TRANSACTION;
  create table users(
    id serial PRIMARY KEY,
    email varchar NOT NULL,
    password varchar NOT NULL,
    fname varchar NOT NULL,
    lname varchar NOT NULL
  );
  ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email)
COMMIT;