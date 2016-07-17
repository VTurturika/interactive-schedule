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
            this.getUsers({id: teacherId}, next)
          }
        })
      }

    });

  }

};
