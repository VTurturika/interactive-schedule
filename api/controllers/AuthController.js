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
				jwtToken: 'JWT ' + JwtChipherService.createToken(user)
			});
		});
  }
};
