/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `UserController.createUser()`
   */
  createUser: function (req, res) {

    const user = req.body.user || undefined;

    const userRole = req.body.user.role || undefined;
    if(userRole === 'admin' && req.body.sudo !== process.env.sudoWord)
      return res.status(503).json({
        error: 'Forbidden. Wrong sudo word.',
      });

    UserService.createUser(user, user => {
      return res.json(user);
    });
  },

  /**
   * `UserController.destroyUser()`
   */
  destroyUser: function (req, res) {
    const sudoWord = req.body.sudoWord || undefined;

    if (sudoWord !== process.env.sudoWord) {
      return res.status(503).json({
        error: 'Forbidden. Wrong sudo word.',
      });
    }
    const user = req.body.user;
    UserService.destroyUser(user, success => {
      res.json(success);
    });

  },

  /**
   * `UserController.updateUser()`
   */
  updateUser: function (req, res) {

    const user = req.body.user;

    UserService.updateUser(user, user => {
      res.json(user);
    });
  },

  getUsersWhere: function (req, res) {

    const where = req.body.where;

    UserService.getUsers(where, users => {
      res.json(users);
    });
  },
};

