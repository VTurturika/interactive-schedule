'use strict';

var bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

const JWT_SECRET =  sails.config.globals.JWT_SECRET;
const EXPIRES_IN =  sails.config.globals.SESSION_EXPIRATION_TIME;

module.exports = {

  hashPassword: function (user) {
    if (user.password) {
      //TODO rewrite to async style
      user.password = bcrypt.hashSync(user.password, 10);
    }
  },

  comparePassword: function(password, user){
    //TODO rewrite to async style
    return bcrypt.compareSync(password, user.password);
  },

  extractToken: function(req) {

    let extractor = require('passport-jwt').ExtractJwt.fromAuthHeader();

    return extractor(req);
  },

  createToken: function(user) {

    let payload = {
      id: user.id,
      role: user.role,
      statusConfirmed: user.statusConfirmed
    };

    payload.iat = Date.now();
    payload.startedAt = new Date(payload.iat).toISOString();
    payload.finishedAt = new Date(payload.iat + EXPIRES_IN*1000).toISOString();

    let token = jwt.sign(payload, JWT_SECRET, {expiresIn: EXPIRES_IN});

    return {
      token: token,
      refreshToken: jwt.sign({}, JWT_SECRET + token),
      startedAt: payload.startedAt,
      finishedAt: payload.finishedAt
    }
  },

  verifyRefreshToken: function(refreshToken, callback) {

    jwt.verify(refreshToken, JWT_SECRET, (err) => callback ( err ? false : true ) );
  }

};
