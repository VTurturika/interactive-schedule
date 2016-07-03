"use strict";

module.exports = {
  getUsers: function (todoConstraints, next) {
    User.find(todoConstraints).exec((err, users) => {
      if (err)
        throw err;
      next(users);
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
