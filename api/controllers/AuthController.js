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

		let user = {};

		user.name = req.body.name || undefined;
    user.surname = req.body.surname || undefined;
    user.role = req.body.role || undefined;
    user.socialId = req.body.socialId || undefined;
    user.email = req.body.email || undefined;
		user.password = req.body.password || undefined;
		user.lessons = req.body.lessons || undefined;

		UserService.createUser(user, (user) => {
			return res.json({
				user: user,
				jwtToken: JwtCipherService.createToken(user)
			});
		});
  },

  login: function (req, res) {

    //TODO add check req.body.email and req.bode.password to undefined

    UserService.getOneUser({email: req.body.email}, (user) => {

      if(user && JwtCipherService.comparePassword(req.body.password, user)) {
        res.json({
          user: user,
          jwtToken: JwtCipherService.createToken(user)
        })
      }
      else {
        res.json({
          msq: "Wrong email or password"
        })
      }
    });
  }
};
