"use strict";
/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `AuthController.signup()`
   */
  signup: function (req, res) {

    let user = {};

    user.email = req.body.email;
    user.password = req.body.password;
    user.name = req.body.name || undefined;
    user.surname = req.body.surname || undefined;
    user.role = req.body.role || undefined;

    Object.keys(user).forEach((item) => {
      if(!user[item])
        res.badRequest(item + ' is required');
    });

    UserService.createUser(user, (err, user) => {
      if(err || !user){
        return res.serverError(err);
      }

      SessionService.startSession(user, (err, result) => {

        if(err)
          return res.serverError(err);

        res.json(result);
      })


    });

  },

  login: function (req, res) {

    let user = {};

    user.email = req.body.email;
    user.password = req.body.password;

    Object.keys(user).forEach((item) => {
      if(!user[item])
        res.badRequest(item + ' is required');
    });

    UserService.getSingleUser({email: user.email}, (err, user) => {

      if(err) {
        return res.serverError(err)
      }

      if(user && JwtService.comparePassword(req.body.password, user)) {

        //todo add checking of already started sessions

        SessionService.startSession(user, (err, result) => {

          if(err)
            return res.serverError(err);

          res.json(result);
        })
      }
      else {
        return res.unauthorized(null, 401, 'Wrong email or password');
      }

    });

  },

  logout: function (req, res) {

    JwtService.verifyRefreshToken(req.body.token, (result) => res.end(result.toString()));
  }

};
