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
        res.serverError(err);
      }
      else {
        res.json(user);
      }

    });

  },

  login: function (req, res) {

  res.end('not implemented');

  },

  logout: function (req, res) {

      res.end('not implemented')
  }

};
