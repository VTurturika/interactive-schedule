"use strict";

module.exports = {
  getUsers: function (todoConstraints, next) {
    
    // todo: validate data
    User.find(todoConstraints).exec((err, users) => {
      if (err)
        throw err;
      next(users);
    });
  },
  createUser: function (userInfo, next) {
    const name = userInfo.name || undefined;
    const surname = userInfo.surname || undefined;
    const role = userInfo.role || undefined;
    const socialId = userInfo.socialId || undefined;
    const email = userInfo.email || undefined;
    const lessons = userInfo.lessons || undefined;
    
    // todo: validate data
    User.create({
      name: name,
      surname: surname,
      role: role,
      socialId: socialId,
      email: email,
      lessons: lessons,
    }).exec((err, user) => {
      if (err)
        throw err;
      next(user);
    });
  },
  destroyUser: function (userInfo, next) {
    //todo: validate data
    User.destroy(userInfo).exec((err, user) => {
      if (err)
        throw err;
      next(user);
    });
  },
  updateUser: function (userInfo, newData, next) {
    //todo: validate data
    User.update(userInfo, newData).exec((err, updated) => {
      if (err)
        throw err;
      next(updated);
    });
  }
};
