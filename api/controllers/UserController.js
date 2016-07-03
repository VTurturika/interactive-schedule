"use strict";

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

    user = {};

    user.name = req.body.name || undefined;
    user.surname = req.body.surname || undefined;
    user.role = req.body.role || undefined;
    user.socialId = req.body.socialId || undefined;
    user.email = req.body.email || undefined;
    user.lessons = req.body.lessons || undefined;

    if (role === 'admin' && req.body.sudo !== process.env.sudoWord) {
      return res.forbidden();
    }

    UserService.createUser(user, user => {
      res.json(user);
    });
  },

  /**
   * `UserController.destroyUser()`
   */
  destroyUser: function (req, res) {
    
    const sudoWord = req.body.sudo || undefined;
    if (sudoWord !== process.env.sudoWord) {
      return res.forbidden();
    }
    const userId = req.body.userId || req.body.user.id || undefined;
    UserService.destroyUser({id: userId}, success => {
      res.json(success);
    });

  },

  /**
   * `UserController.updateUser()`
   */
  updateUser: function (req, res) {

    let oldId = req.body.oldId || undefined;
    let user = {};

    if (req.body.name)
      user.name = req.body.name;
    if (req.body.surname)
      user.surname = req.body.surname;
    if (req.body.role)
      user.role = req.body.role;
    if (req.body.socialId)
      user.socialId = req.body.socialId;
    if (req.body.email)
      user.email = req.body.email;
    if (req.body.lessons)
      user.lessons = req.body.lessons;
    if (req.body.id)
      user.id = req.body.id;
    if (req.body.createdAt)
      user.createdAt = req.body.createdAt;

    UserService.updateUser(oldId, user, user => {
      res.json(user);
    });
  },

  /**
   * `UserController.getUsersWhere()`
   */
  getUsers: function (req, res) {

    let user = {};

    if (req.param('name'))
      user.name = req.param('name');
    if (req.param('surname'))
      user.surname = req.param('surname');
    if (req.param('role'))
      user.role = req.param('role');
    if (req.param('socialId'))
      user.socialId = req.param('socialId');
    if (req.param('email'))
      user.email = req.param('email');
    if (req.param('lessons'))
      user.lessons = req.param('lessons');
    if (req.param('id'))
      user.id = req.param('id');
    if (req.param('createdAt'))
      user.createdAt = req.param('createdAt');
    if (req.param('updatedAt'))
      user.updatedAt = req.param('updatedAt');

    UserService.getUsers(user, users => {
      res.json(users);
    });
  },
};

