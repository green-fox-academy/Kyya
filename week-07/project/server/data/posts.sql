CREATE TABLE IF NOT EXISTS Posts(
  id SERIAL,
  owner BIGINT UNSIGNED,
  title VARCHAR(128) NOT NULL,
  url TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score INT DEFAULT 0,
  PRIMARY KEY(id),
  FOREIGN KEY(owner) REFERENCES Users(id) ON DELETE CASCADE
);
