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

-- Q6
-- For all cases where the same reviewer rated the same movie twice
-- and gave it a higher rating the second time, return the reviewer's name and the title of the movie.
SELECT name, title
FROM Movie
INNER JOIN Rating R1 USING(mId)
INNER JOIN Rating R2 USING(rId)
INNER JOIN Reviewer USING(rId)
WHERE R1.mId = R2.mId
AND R1.ratingDate < R2.ratingDate
AND R1.stars < R2.stars;

-- Q7
-- For each movie that has at least one rating, find the highest number of stars that movie received.
-- Return the movie title and number of stars. Sort by movie title.
SELECT title, MAX(stars)
FROM Movie
INNER JOIN Rating USING(mID)
GROUP BY title
ORDER BY title ASC;

-- Q8
-- For each movie, return the title and the 'rating spread', that is,
-- the difference between highest and lowest ratings given to that movie.
-- Sort by rating spread from highest to lowest, then by movie title.
SELECT title, MAX(stars) - MIN(stars) as ratingSpread
FROM Movie
LEFT JOIN Rating USING(mID)
WHERE stars IS NOT NULL
GROUP BY mID
ORDER BY ratingSpread DESC, title ASC;

-- Q9
-- Find the difference between the average rating of movies released before 1980
-- and the average rating of movies released after 1980.
-- (Make sure to calculate the average rating for each movie,
-- then the average of those averages for movies before 1980 and movies after.
-- Don't just calculate the overall average rating before and after 1980.)
SELECT ABS(AVG(Before1980.avg) - AVG(After1980.avg))
FROM (
    SELECT AVG(stars) as avg
    FROM Movie
    INNER JOIN Rating USING(mID)
    WHERE year < 1980
    GROUP BY mID
) AS Before1980, (
    SELECT AVG(stars) as avg
    FROM Movie
    INNER JOIN Rating USING(mID)
    WHERE year > 1980
    GROUP BY mID
) AS After1980;

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
