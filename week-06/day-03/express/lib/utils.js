const { parse } = require('url');

function send(target) {
  if (typeof target === 'object') {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(target));
  } else if (typeof target === 'string') {
    this.setHeader('Content-Type', 'text/plain');
    this.end(target);
  } else {
    throw new TypeError('Trying to send unsupported type');
  }
}

function set(...args) {
  this.setHeader(...args);
}

function get(key) {
  return this.headers[key.toLowerCase()] || undefined;
}

function status(code) {
  this.statusCode = code;
}

function sendStatus(code) {
  this.statusCode = code;
  this.end();
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

module.exports = {
  enhance: (req, res) => {
    const { pathname, query } = parse(req.url, true);
    const path = `/${pathname.slice(1).split('/')[0]}`;

    Object.assign(res, { send, status, sendStatus });
    Object.assign(req, {
      set, get,
      body,
      path,
      query,
      params: pathname.substr(1).split('/')
    });
    return [ req, res ];
  }
}
