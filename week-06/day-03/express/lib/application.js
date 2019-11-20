const { createServer } = require('http');
const { enhance } = require('./utils');

class Application {

  constructor() {
    this.middleware = [];
  }

  get(path, fn) {
    this.middleware.push({ method: 'GET', path, fn });
  }

  post(path, fn) {
    this.middleware.push({ method: 'POST', path, fn });
  }

  delete(path, fn) {
    this.middleware.push({ method: 'DELETE', path, fn });
  }

  put(path, fn) {
    this.middleware.push({ method: 'PUT', path, fn });
  }
 
  listen(...args) {
    const server = createServer(this.callback());
    return server.listen(...args);
  }

  callback() {
    const handleRequest = (req, res) => {
      enhance(req, res);
      this.middleware.filter(route => route.path === req.path && route.method === req.method)
        .forEach(route => route.fn.apply(this, [req, res]));
    }
    return handleRequest;
  }
}

module.exports = Application;
