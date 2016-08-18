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
            next(null, sessionInfo);
        });
      }
    })
  },

  closeSession: function (token, next) {

    Session.destroy({token: token}).exec((err, session) => {

      if (err)
        next(err, null);
      else
        next(null, session)
    });

  },

  getSession: function (token, next) {

    Session.findOne({token: token}).exec((err, session) => {

      if (err)
        next(err, null);
      else
        next(null, session)
    })
  },

  refreshSession: function (refreshToken, next) {

    Session.findOne({refreshToken: refreshToken})
      .populate('user')
      .exec((err, session) => {

        if (err) {
          return next(err, false);
        }

        if(!session)
          return next(null, false, {
            case: 'Wrong refreshToken'
          });

        let newSession = JwtService.createToken(session.user);

        session.token = newSession.token;
        session.refreshToken = newSession.refreshToken;
        session.startedAt = newSession.startedAt;
        session.finishedAt = newSession.finishedAt;

        session.save((err) => {

          if(err) return next(err, false);
          next(null, true, newSession);

        })
      })
  },

  clearOldSessions: function (userId, next) {

  }

};
