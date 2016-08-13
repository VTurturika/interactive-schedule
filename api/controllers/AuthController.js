"use strict";
/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {

  /**
   * `AuthController.signup()`
   */
  signup: function (req, res) {

    passport.authenticate('local-signup', (error, user, info) => {

      if (error) return res.serverError(error);
      if (!user)
        return res.unauthorized();

      return res.json(user);

    })(req, res);

  },

  login: function (req, res) {

    passport.authenticate('local-login', (error, user, info) => {

      if (error) return res.serverError(error);
      if (!user)
        return res.unauthorized();

      req.logIn(user, (err) => {
        if(err)
          return res.json(err);
        else
          return res.json(user);
      })

    })(req, res);

  },

  logout: function (req, res) {

    req.logout();
    res.json({msg: 'logout'});

  }

};
