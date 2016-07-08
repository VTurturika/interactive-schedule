"use strict";

// todo: teacher specific functions (подсчет часов и так далее. Описать)

module.exports = {
  getUsers: function (constraints, next) {
    User.find(constraints)
        .populate('lessons')
        .exec((err, users) => {
          if (err)
            throw err;

          next(users);
        });
  },

  getOneUser: function (constraint, next) {

      console.log("Inside getOneUser\nconstraint: " + JSON.stringify(constraint));
      User.findOne(constraint)
          .exec((err, user) => {
            console.log("Inside findOne.exec\nerr: " + JSON.stringify(err) + "\nuser :" + JSON.stringify(user));
            if (err)
              throw err;

              next(user);
          });
  },

  createUser: function (userInfo, next) {
    User.create(userInfo).exec((err, user) => {
      if (err)
        return next(err);
      next(user);
    });
  },
  destroyUser: function (userInfo, next) {

    User.destroy(userInfo).exec((err, user) => {
      if (err)
        return next(err);
      next(user);

    });
  },
  updateUser: function (oldUserId, newData, next) {

    User.update(oldUserId, newData).exec((err, updated) => {
      if (err)
        return next(err);
      next(updated);
    });

  }
};
