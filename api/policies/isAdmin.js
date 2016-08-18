'use strict';

let jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

  const JWT_SECRET = sails.config.globals.JWT_SECRET;

  jwt.verify(JwtService.extractToken(req), JWT_SECRET, (err, decoded) => {

    if(err) {
      return res.serverError({
        code: 500,
        message: err.message
      });
    }

    if(decoded.statusConfirmed && UserService.hasPermission(decoded.role, 'admin')) {
      next()
    }
    else {
      return res.forbidden({
        code: 403,
        message: "Access denied"
      });
    }

  });
};
