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
  SET score = score + NEW.score
  WHERE Posts.id = NEW.pid;
END;

CREATE TRIGGER After_Votes_Delete
  AFTER DELETE ON Votes
  FOR EACH ROW
BEGIN
  UPDATE Posts
  SET score = score - OLD.score
  WHERE Posts.id = OLD.pid;
END;

CREATE TRIGGER After_Votes_Update
  AFTER UPDATE ON Votes
  FOR EACH ROW
BEGIN
  IF OLD.pid = NEW.pid THEN
    UPDATE Posts
      SET score = score - OLD.score + NEW.score
      WHERE Posts.id = NEW.pid;
  END IF;
END;

CREATE PROCEDURE CreateVote(
  uid BIGINT UNSIGNED,
  pid BIGINT UNSIGNED,
  score TINYINT(1)
)
BEGIN
  INSERT INTO Votes SET `uid` = uid, `pid` = pid, `score` = score;

  SELECT Posts.* FROM Posts
    INNER JOIN Votes ON(Votes.pid = Posts.id)
    WHERE Votes.id = LAST_INSERT_ID();
END;
