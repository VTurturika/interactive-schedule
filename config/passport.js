'use strict';

var passport = require('passport');

module.exports = {
  http: {
    customMiddleware: (app) => {

      app.use(passport.initialize());

      let JwtStrategy = require('passport-jwt').Strategy,
          ExtractJwt = require('passport-jwt').ExtractJwt;

      let OAuth2ClientStrategy = require('passport-oauth2-client-password');

      const JWT_SECRET =  sails.config.globals.JWT_SECRET,
            OAUTH2_CLIENT_ID = sails.config.globals.OAUTH2_CLIENT_ID,
            OAUTH2_CLIENT_SECRET = sails.config.globals.OAUTH2_CLIENT_SECRET;

      const JWT_STRATEGY_CONFIG = {
        secretOrKey: JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        ignoreExpiration: false
      };

      passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG,(jwt_payload, done) => {

        User.findOne({id: jwt_payload.id}, function (err, user) {
          if (err) {
            return done(err, false);
          }
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      }));


      passport.use(new OAuth2ClientStrategy((clientId, clientSecret, done) => {

        if(clientId != OAUTH2_CLIENT_ID) {

          done(null, {confirmed : false}, {
            message: 'wrong clientId',
            code: 401
          })
        }

        if(clientSecret != OAUTH2_CLIENT_SECRET) {

          done(null, {confirmed : false}, {
            message: 'wrong clientSecret',
            code: 401
          })
        }

        done(null, {confirmed : true}, {
          message: 'credentials confirmed',
          code: 200
        });

      }));

    }
  }
};
