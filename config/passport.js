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
        ignoreExpiration: false,
        passReqToCallback: true
      };

      passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG,(req, payload, done) => {

        let token = JwtService.extractToken(req);

        SessionService.getSession(token, (err, session) => {

          if(err) {
            done(err, false);
          }
          if(!session) {
            done(null,false, {
              message: 'Wrong token'
            });
          }
          else {
            done(null, session, {
              message: 'Token confirmed',
              code: 200,
            })
          }
        });
      }));


      passport.use(new OAuth2ClientStrategy((clientId, clientSecret, done) => {

        if(clientId != OAUTH2_CLIENT_ID) {

          done(null, {confirmed : false}, {
            message: 'Wrong clientId',
            code: 401
          })
        }

        if(clientSecret != OAUTH2_CLIENT_SECRET) {

          done(null, {confirmed : false}, {
            message: 'Wrong clientSecret',
            code: 401
          })
        }

        done(null, {confirmed : true}, {
          message: 'Credentials confirmed',
          code: 200
        });

      }));

    }
  }
};
