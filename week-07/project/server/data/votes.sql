CREATE TABLE IF NOT EXISTS Votes(
  id SERIAL,
  uid BIGINT UNSIGNED,
  pid BIGINT UNSIGNED,
  score tinyint(1) NOT NULL,
  INDEX(id),
  PRIMARY KEY(uid, pid),
  FOREIGN KEY(uid) REFERENCES Users(id),
  FOREIGN KEY(pid) REFERENCES Posts(id)
);

CREATE TRIGGER After_Votes_Insert
  AFTER INSERT ON Votes
  FOR EACH ROW
BEGIN
  UPDATE Posts
  SET Posts.score = (SELECT SUM(score) FROM Votes WHERE pid = NEW.pid)
  WHERE id = NEW.pid;
END;

CREATE TRIGGER After_Votes_Delete
  AFTER DELETE ON Votes
  FOR EACH ROW
BEGIN
  UPDATE Posts
  SET Posts.score = (SELECT SUM(score) FROM Votes WHERE pid = OLD.pid)
  WHERE id = OLD.pid;
END;

CREATE TRIGGER After_Votes_Update
  AFTER UPDATE ON Votes
  FOR EACH ROW
BEGIN
  UPDATE Posts
  SET Posts.score = (SELECT SUM(score) FROM Votes WHERE pid = NEW.pid)
  WHERE id = NEW.pid;
END;
