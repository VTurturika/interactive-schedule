'use strict';

var passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local').Strategy;

//TODO maybe should declare constants in /env/prodaction.js
const SECRET = process.env.tokenSecret || "superSecret";

const JWT_STRATEGY_CONFIG = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  ignoreExpiration: true
};

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  UserService.getOneUser({
    email: email
  }, (err, user) => {
    done(err, user)
  })
});


passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG, function (jwt_payload, done) {

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


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
  (req, email, password, done) => { // callback with email and password from our form

    UserService.getOneUser({
      email: email
    }, (err, user) => {

      if (err)
        return done(err);

      if (user) {
        return done(null, false);
      }
      else {

        UserService.createUser({
          name: "testName",
          surname: "testSurname",
          role: "student",
          email: email,
          password: password
        }, (err, user) => {

          if (err)
            return done(err);
          else
            return done(null, user)
        });

      }
    });

  }));

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, email, password, done) => {

    UserService.getOneUser({
      email: email
    }, (err, user) => {

      if (err)
        return done(err);

      if (!user) {
        return done(null, false, 'user not found');
      }

      if (!JwtCipherService.comparePassword(password, user)) {
        return done(null, false, 'wrong password')
      }

      return done(null, user)

    });

  }));

module.exports = {
  jwtSecret: SECRET,
  express: {
    customMiddleware: (app) => {
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
