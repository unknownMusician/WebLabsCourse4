const jwt = require('jsonwebtoken')

class JWTService {
  validate(token) {
    return jwt.verify(token, 'secret')
  }

  sign(payload) {
    return jwt.sign(payload, 'secret')
  }
}

module.exports = new JWTService()