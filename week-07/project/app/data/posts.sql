CREATE TABLE IF NOT EXISTS Posts(
  pid SERIAL,
  title VARCHAR(128) NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY(pid)
);
