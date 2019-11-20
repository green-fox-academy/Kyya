const { createServer } = require('http');
const { enhance } = require('./utils');
const movies = require('./routes/movies');

const requestHandler = (req, res) => {
  enhance(req, res);
  switch (req.rootPath) {
    case '/movies':
      switch (req.method) {
        case 'GET':
          movies.getMovies(req, res);
          break;
        case 'POST':
          movies.postMovies(req, res);
          break;
        case 'PUT':
          movies.putMovies(req, res);
          break;
        case 'DELETE':
          movies.deleteMovies(req, res);
          break;
        default:
          res.statusCode = 405;
          res.end();
      }
      break;
    default:
      res.statusCode = 404;
      res.send({ status: 404, message: 'Not Found' });
  }
};

const server = createServer();
server.on('request', requestHandler);

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`App listening on ${PORT}`);
});
