'use strict';

module.exports = {

  startSession: function (user, next) {

    let sessionInfo = JwtService.createToken(user);

    Session.create(sessionInfo).exec((err, session) => {

      if (err) {
        next(err, null);
      }
      else {
        user.sessions.add(session);
        user.save((err) => {
          if (err)
            next(err, null);
          else
            next(null, session);
        });
      }
    })
  },

  closeSession: function(token, next) {

    Session.destroy({token:token}).exec((err, session) => {

      if(err)
        next(err, null);
      else
        next(null, session)
    });

  },

  getSession: function(token, next) {

    Session.findOne({token: token}).exec((err, session) => {

      if(err)
        next(err, null);
      else
        next(null, session)
    })
  },

  refreshSession: function () {

  },

  clearOldSessions: function (userId, next) {

  }

};
