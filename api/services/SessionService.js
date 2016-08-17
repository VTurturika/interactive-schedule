'use strict';

module.exports = {

  startSession: function (user,  next) {

    let sessionInfo = JwtService.prepareSession(user);

    Session.create(sessionInfo).exec((err, session) => {

      if(err) {
        next(err, null);
      }
      else {

        user.sessions.add(session);
        user.save((err) => {
          if(err)
            next(err, null);
          else
            delete session.createdAt;
          delete session.updatedAt;

          next(null, session);

        });

      }
    })
  },

  refreshSession: function () {

  },

  clearOldSessions: function (userId, next) {

  }

};
