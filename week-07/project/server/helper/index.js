const crypto = require('crypto');
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

function sha256(text) {
  return crypto.createHmac('sha256', PRIVATE_KEY)
    .update(text)
    .digest('hex');
}

function setToken() {
  return (req, res, next) => {
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined') {
      const [, token] = header.split(' ');
      req.token = token;
    }
    next();
  }
}

module.exports = {
  sha256,
  setToken
}
