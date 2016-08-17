'use strict';

var passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('oauth2-client-password', {session : false}, (error, result, info) => {

    if(result && result.confirmed) {
       next()
    }
    else if (result && !result.confirmed) {
      res.unauthorized(null, info && info.code, info && info.message);
    }
    else {
      res.badRequest('client_id and client_secret required');
    }

  })(req, res);
};
