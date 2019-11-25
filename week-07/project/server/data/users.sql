CREATE TABLE IF NOT EXISTS Users(
  uid SERIAL,
  name VARCHAR(32) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE
  PRIMARY KEY(uid)
);
