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

    let user = {};

    user.name = req.body.name || undefined;
    user.surname = req.body.surname || undefined;
    user.role = req.body.role || undefined;
    user.socialId = req.body.socialId || undefined;
    user.email = req.body.email || undefined;

    UserService.createUser(user, (err, user) => {
      if(err || !user){
        res.badRequest('Bad request!');
      }
      else {
        res.json(user);
      }

    });
  },

  /**
   * `UserController.destroyUser()`
   */
  destroyUser: function (req, res) {

    const userId = req.body.userId || undefined;
    if(!userId) {
      return res.badRequest('You need to specify ID of subject to destroy');
    }

    UserService.destroyUser({id: userId}, (err, success) => {
      if(err || !success) {
        res.badRequest('Bad request!');
      }
      else {
        res.json(success);
      }
    });

  },

  /**
   * `UserController.updateUser()`
   */
  updateUser: function (req, res) {

    let oldId = req.body.oldId;
    if (!oldId) {
      return res.badRequest('You need to specify ID of subject to change');
    }

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
    if (req.body.id)
      user.id = req.body.id;
    if (req.body.createdAt)
      user.createdAt = req.body.createdAt;

    UserService.updateUser(oldId, user, (err, updatedUser) => {
      if(err || !updatedUser) {
        res.badRequest();
      }
      else {
        res.json(updatedUser);
      }

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

    UserService.getUsers(user, (err, users) => {
      if(err || !users) {
        res.badRequest('Bad request!');
      }
        res.json(users);
    });
  },

  //only for teachers
  assignLesson: function(req,res) {

    if(!req.body.teacherId || !req.body.lessonId) {
      res.badRequest();
    }

    UserService.assignLesson(req.body.teacherId, req.body.lessonId, (err, teacher) => {
      if(err) {
        res.badRequest();
      }
      else{
        res.json(teacher);
      }
    });
  },

  //only for teachers
  unassignLesson: function(req,res) {

    if(!req.body.teacherId || !req.body.lessonId) {
      res.badRequest();
    }

    UserService.unassignLesson(req.body.teacherId, req.body.lessonId, (err, teacher) => {
      if(err) {
        res.badRequest();
      }
      else{
        res.json(teacher);
      }
    });

  },

  getSingleUser: function (req, res) {

    let user = {};

    if(req.body.id) {
      user.id = req.body.id;
    }
    else if(req.body.email) {
      user.email = req.body.email;
    }
    UserService.getSingleUser(user, (err, result) => {
      if(err)
        res.badRequest();
      else
        res.json({result : result});
    });

  }
};

