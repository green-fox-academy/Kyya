-- Create Table
CREATE TABLE IF NOT EXISTS `Todo` (
  ID INT NOT NULL AUTO_INCREMENT,
  Text VARCHAR(255) NOT NULL,
  Completed TINYINT(1) NOT NULL DEFAULT FALSE,
	CreateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT TODO_PK PRIMARY KEY (ID)
);


-- C.R.U.D
-- Create
INSERT INTO `Todo` (text)
VALUES ("Sleeping"), ("Getting up"), ("Eating");

-- Read
SELECT * FROM `Todo`
WHERE Completed = 1;

-- Update
UPDATE `Todo`
SET Completed = 1
WHERE Text = "Getting up";

-- Delete
DELETE FROM `Todo`
WHERE Text = "Sleeping";
