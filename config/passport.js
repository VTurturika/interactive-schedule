'use strict';

var passport = require('passport');

module.exports = {
  http: {
    customMiddleware: (app) => {

      app.use(passport.initialize());

      let JwtStrategy = require('passport-jwt').Strategy,
          ExtractJwt = require('passport-jwt').ExtractJwt;

      let OAuth2ClientStrategy = require('passport-oauth2-client-password').Strategy;
      let FacebookStrategy = require('passport-facebook').Strategy;

      const JWT_SECRET = sails.config.globals.JWT_SECRET,
            OAUTH2_CLIENT_ID = sails.config.globals.OAUTH2_CLIENT_ID,
            OAUTH2_CLIENT_SECRET = sails.config.globals.OAUTH2_CLIENT_SECRET;

      const FACEBOOK_CLIENT_ID = sails.config.globals.FACEBOOK_CLIENT_ID,
            FACEBOOK_CLIENT_SECRET = sails.config.globals.FACEBOOK_CLIENT_SECRET,
            FACEBOOK_CALLBACK = sails.config.globals.FACEBOOK_CALLBACK;

      passport.use(new JwtStrategy({

        secretOrKey: JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        ignoreExpiration: false,
        passReqToCallback: true

      }, (req, payload, done) => {

        let token = JwtService.extractToken(req);

        SessionService.getSession(token, (err, session) => {

          if (err) {
            done(err, false);
          }
          if (!session) {
            done(null, false, {
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

        if (clientId != OAUTH2_CLIENT_ID) {

          done(null, {confirmed: false}, {
            message: 'Wrong clientId',
            code: 401
          })
        }

        if (clientSecret != OAUTH2_CLIENT_SECRET) {

          done(null, {confirmed: false}, {
            message: 'Wrong clientSecret',
            code: 401
          })
        }

        done(null, {confirmed: true}, {
          message: 'Credentials confirmed',
          code: 200
        });

      }));

      passport.use(new FacebookStrategy({

        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: FACEBOOK_CALLBACK,
        profileFields: ['id', 'emails', 'name'],
        passReqToCallback: true

      }, (req, token, refreshToken, profile, done) => {

        if(profile && token) {
          UserService.getSingleUser({facebookId: profile.id}, (err, user) => {

            if(err)
              return done(err, false);

            if(!user) { //create new user and start session

              let user = {
                name: profile.name.givenName,
                surname: profile.name.familyName,
                role: 'student',
                facebookId: profile.id,
                facebookToken: token
              };

              UserService.createUser(user, (err, createdUser) => {

                if(err)
                  return done(err, false);

                SessionService.startSession(createdUser, (err, sessionInfo) => {

                  if(err)
                    return done(err, false);

                  done(null, sessionInfo)
                })
              })
            }
            else { //user already exist, just start session

              SessionService.startSession(user, (err, sessionInfo) => {

                if(err)
                  return done(err, false);

                done(null, sessionInfo)
              })
            }
          })
        }
        else {
          done(null, false, {case: 'profile or token are empty'})
        }

      }))

    }
  }
};
