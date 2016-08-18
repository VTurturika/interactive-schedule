/**
 * isAuthenticated
 * @description :: Policy to inject user in req via JSON Web Token
 */
var passport = require('passport');

module.exports = function (req, res, next) {

    passport.authenticate('jwt', {session : false}, function (error, session, info) {

      if(error) {
        return res.serverError({
          code: 500,
          message: error.message
        });
      }
      if(!session) {

        if(info && info.message == 'No auth token') {
          res.badRequest({
            code: 400,
            message: info.message
          });
        }
        else {
          res.forbidden({
            code: 403,
            message: info.message
          });
        }
      }
      else {
        req.tokenSession = session;
        next();
      }

    })(req, res);

};
