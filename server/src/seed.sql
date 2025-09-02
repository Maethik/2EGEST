DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  date TIMESTAMP NOT NULL,
  user_id INT REFERENCES users(id)
);

INSERT INTO users (name) VALUES ('Alice'), ('Bob');

INSERT INTO events (title, date, user_id) VALUES 
('Conférence JS', '2025-09-15 10:00:00', 1),
('Meetup GraphQL', '2025-10-01 18:30:00', 2);
