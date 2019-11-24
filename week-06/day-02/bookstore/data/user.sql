CREATE TABLE IF NOT EXISTS User(
  ID INT NOT NULL,
  Prefix VARCHAR(32),
  FirstName VARCHAR(64) NOT NULL,
  LastName VARCHAR(64) NOT NULL,
  Address TEXT,
  Height FLOAT,
  BitcoinAddress VARCHAR(36),
  ColorPreference VARCHAR(7),
  PRIMARY KEY(ID)
);
