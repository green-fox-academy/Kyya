const { movies, isAuthorized, isAvailable } = require('../utils');

module.exports = {
  getMovies: (req, res) => {
    if (req.params.length > 1) {
      const [ , movieId ] = req.params;
      const [ exists, movie ] = isAvailable(movieId);
      if (exists) {
        res.send(movie[0]);
        return;
      } else {
        res.statusCode = 404;
        res.send({ status: 404, message: 'Not Found' });
        return;
      }
    }
    res.send(movies);
  },
  postMovies: async (req, res) => {
    if (!isAuthorized(req, res)) {
      return;
    }
    const requestBody = await req.body();
    try {
      const parsedBody = JSON.parse(requestBody);
      if (!parsedBody.name) {
        res.statusCode = 400;
        res.send({ status: 400, message: 'Please provide movie\'s name' });
        return;
      }
      if (!parsedBody.genre) {
        Object.assign(parsedBody, { genre: 'unknown' });
      }

      if (movies.filter(movie => movie.name === parsedBody.name).length > 0) {
        res.statusCode = 409;
        res.send({ status: 409, message: 'The movie has exists' });
        return;
      }
      res.statusCode = 201;
      res.send(parsedBody);
    } catch (error) {
      res.statusCode = 500;
      res.end();
      throw new Error('Unable to parse JSON');
    }
  },
  deleteMovies: (req, res) => {
    if (!isAuthorized(req, res)) {
      return;
    }
    if (req.params.length > 1) {
      const [ , movieId ] = req.params;
      const [ exists, movie ] = isAvailable(movieId);
      if (exists) {
        res.send({ status: 'ok', movie });
        return;
      } else {
        res.statusCode = 404;
        res.send({ status: 404, message: 'Not Found' });
        return;
      }
    } else {
      res.statusCode = 400;
      res.send({ status: 400, message: 'Bad Request'});
    }
  },
  putMovies: async (req, res) => {
    if (!isAuthorized(req, res)) {
      return;
    }
    if (req.params.length > 1) {
      const [ , movieId ] = req.params;
      const [ exists ] = isAvailable(movieId);
      if (!exists) {
        res.statusCode = 404;
        res.send({ status: 404, message: 'Not Found' });
        return;
      }
      const requestBody = await req.body();
      try {
        const { id, name, genre } = JSON.parse(requestBody);
        if ( !id || !name || !genre || id !== parseInt(movieId) ) {
          res.statusCode = 400;
          res.send({ status: 400, message: 'Bad Request' });
        }
        res.send({ id, name, genre });
      } catch (error) {
        res.statusCode = 500;
        res.end();
        throw new Error('Unable to parse JSON');
      }
    }
  },
}
