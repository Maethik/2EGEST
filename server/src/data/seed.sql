DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;

DROP TABLE IF EXISTS event_participants CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	password VARCHAR(100) NOT NULL
);

CREATE TABLE events (
	id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	start_event TIMESTAMP NOT NULL,
	end_event TIMESTAMP NOT NULL,
	organizer_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE event_participants (
	event_id INT REFERENCES events(id) ON DELETE CASCADE,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	PRIMARY KEY (event_id, user_id)
);

INSERT INTO users (name, password) VALUES ('Alice', 'Alice'), ('Bob', 'Bob');

INSERT INTO events (title, start_event, end_event, organizer_id) VALUES 
('Conférence JS', '2025-09-15 10:00:00', '2025-09-15 12:00:00', 1),
('Meetup GraphQL', '2025-10-01 18:30:00', '2025-10-01 20:00:00', 2);

-- Ajout de participants
INSERT INTO event_participants (event_id, user_id) VALUES
(1, 1), -- Alice participe à sa conférence
(1, 2), -- Bob participe à la conférence d'Alice
(2, 2); -- Bob participe à son meetup
