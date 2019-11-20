const { parse } = require('url');
const movies = require('./data');

function send(target) {
  if (typeof target === 'object') {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(target));
  } else if (typeof target === 'string') {
    this.setHeader('Content-Type', 'text/plain');
    this.end(target);
  } else {
    throw new Error('Trying to send unsupported type');
  }
}

function body() {
  return new Promise((resolve, reject) => {
    let requestBody = '';
    this.on('data', chunk => {
      requestBody += chunk;
    });
    this.on('end', () => resolve(requestBody));
    this.on('error', (error) => reject(new Error(error.message)));
  })
}

function getHeader(key) {
  return this.headers[key.toLowerCase()] || undefined;
}

module.exports = {
  movies,
  isAuthorized: (req, res) => {
    const auth = req.getHeader('Authorization');
    if (!auth || auth !== 'top-secret') {
      res.statusCode = 403;
      res.send({ status: 403, message: 'Forbidden'});
      return false;
    }
    return true;
  },
  isAvailable: (movieId) => {
    const filteredMovies = movies.filter(movie => movie.id === parseInt(movieId));
    return [ filteredMovies.length > 0, filteredMovies];
  },
  enhance: (req, res) => {
    const { pathname, query } = parse(req.url, true);
    const rootPath = `/${pathname.slice(1).split('/')[0]}`;

    Object.assign(res, { send });
    Object.assign(req, {
      rootPath,
      query, body, getHeader,
      params: pathname.substr(1).split('/')
    });
    return [ req, res ];
  }
}
