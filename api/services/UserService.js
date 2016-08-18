"use strict";

// todo: teacher specific functions (подсчет часов и так далее. Описать)

module.exports = {

  getUsers: function (constraints, next) {

    User.find(constraints)
        .populate('lessons')
        .populate('subscribeList')
        .exec((err, users) => {
          if (err) {
            next(err, null)
          }
          else {
            next(null, users);
          }
        });
  },

  getSingleUser: function (constraint, next) {

      User.findOne(constraint)
          .exec((err, user) => {
            if (err) {
              next(err, null);
            }
            else {
              next(null, user)
            }
          });
  },

  createUser: function (userInfo, next) {

    User.create(userInfo).exec((err, user) => {
      if (err) {
        next(err, null);
      }
      else {
        next(null, user);
      }
    });
  },

  destroyUser: function (userInfo, next) {

    User.destroy(userInfo).exec((err, user) => {
      if (err) {
        next(err, null);
      }
      else {
        next(null, user);
      }
    });
  },

  updateUser: function (oldUserId, newData, next) {

    User.update(oldUserId, newData).exec((err, updated) => {
      if (err) {
        next(err, null);
      }
      else {
        next(null, updated);
      }
    });
  },

  assignLesson: function (teacherId, lessonId, next) {

    User.findOne(teacherId).exec((err, teacher) => {

      if(err){
        next(err, null);
      }
      else {
        teacher.lessons.add(lessonId);
        teacher.save((err) => {
          if(err) {
            next(err, null)
          }
          else {
            this.getUsers({id: teacherId}, (err, teacher) => {

              if(err) next(err, null);
              else {

                let result = {
                  userId: teacher[0].id,
                  lessons: teacher[0].lessons
                };

                next(null, result);
              }

            })
          }
        })
      }
    });
  },

  unassignLesson: function (teacherId, lessonId, next) {
    User.findOne(teacherId).exec((err, teacher) => {

      if(err){
        next(err, null);
      }
      else {
        teacher.lessons.remove(lessonId);
        teacher.save((err) => {
          if(err) {
            next(err, null)
          }
          else {
            this.getUsers({id: teacherId}, (err, teacher) => {

              if(err) next(err, null);
              else {

                let result = {
                  userId: teacher[0].id,
                  lessons: teacher[0].lessons
                };

                next(null, result);
              }

            })
          }
        })
      }
    })
  },

  hasPermission: function (currentRole, roleForConfirm) {

    let priorities = ['student', 'groupLeader', 'teacher', 'admin'];

    return priorities.indexOf(currentRole) >= priorities.indexOf(roleForConfirm);
  },

  updateStatus: function(req, res) {

    let user = {};

    user.userId = req.body.userId || undefined;
    user.statusConfirmed = req.body.statusConfirmed || undefined;

    Object.keys(user).forEach((key) => {
      if(!user[key]) return res.badRequest({
        code: 400,
        message:  key + ' is required'
      });
    });

    User.findOne(user.userId).exec((err, userFromDb) => {

      if(err) return res.serverError({
        code: 500,
        message: err.message
      });

      if(req.body.role == 'admin' || userFromDb.role == 'admin') return res.forbidden({
        code: 403,
        message: 'Access denied'
      });

      if((req.url == '/user/updateGroupLeaderStatus' && req.body.role == 'teacher') ||
         (req.url == '/user/updateTeacherStatus' && req.body.role == 'groupLeader') ) {

        return res.badRequest({
          code: 400,
          message: 'role is invalid'
        })
      }

      userFromDb.role = req.body.role ? req.body.role : userFromDb.role;
      userFromDb.statusConfirmed = user.statusConfirmed;
      userFromDb.save((err) => {

        if(err) return res.serverError({
          code: 500,
          message: err.message
        });

        res.json({
          code: 200,
          message: 'Status updated',
          updatedUser: userFromDb
        });
      })
    });
  }

};
