'use strict';

module.exports = (req, res, next) => {

  if(req.isAuthenticated())
    return next();
  else
    return res.unauthorized();
};
