-- Q1
-- Find the titles of all movies directed by Steven Spielberg.
SELECT title FROM Movie
WHERE director = "Steven Spielberg";

-- Q2
-- Find all years that have a movie that received a rating of 4 or 5, and sort them in increasing order.
SELECT DISTINCT year from Movie
WHERE mID IN (
    SELECT mID FROM Rating
    WHERE stars = 4 OR stars = 5
)
ORDER BY year ASC;

-- Q3
-- Find the titles of all movies that have no ratings.
SELECT title from Movie
WHERE Movie.mID NOT IN (SELECT mID FROM Rating);

-- Q4
-- Some reviewers didn't provide a date with their rating.
-- Find the names of all reviewers who have ratings with a NULL value for the date.
SELECT name FROM Reviewer
WHERE rID IN (
    SELECT rID FROM Rating
    WHERE ratingDate IS NULL
)

-- Q5
-- Write a query to return the ratings data
-- in a more readable format: reviewer name, movie title, stars, and ratingDate.
-- Also, sort the data, first by reviewer name, then by movie title, and lastly by number of stars.
SELECT Reviewer.name, Movie.title, Rating.stars, Rating.ratingDate
FROM Movie, Reviewer, Rating
WHERE Rating.rID = Reviewer.rID 
AND Rating.mID = Movie.mID
ORDER BY Reviewer.name, Movie.title, Rating.stars ASC;

-- EXTRA Q1
-- Find the names of all reviewers who rated Gone with the Wind.
SELECT name FROM Reviewer
WHERE rID IN (
    SELECT rID FROM Rating
    WHERE mID IN (
        SELECT mID FROM Movie
        WHERE title="Gone with the Wind"
    )
)

-- EXTRA Q2
-- For any rating where the reviewer is the same as the director of the movie,
-- return the reviewer name, movie title, and number of stars.
SELECT Reviewer.name, Movie.title, Rating.stars
FROM Movie, Reviewer, Rating
WHERE Rating.rID = Reviewer.rID
AND Rating.mID = Movie.mID
AND Movie.director = Reviewer.name;
