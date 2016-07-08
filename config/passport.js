'use strict';

var passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

//TODO maybe should declare constants in /env/prodaction.js
const SECRET = process.env.tokenSecret || "superSecret";

const JWT_STRATEGY_CONFIG = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG, function(jwt_payload, done) {
  //TODO implement check user password
  UserService.getUsers({email : jwt_payload}, users => {
      console.log(JSON.stringify(users));
      done(null,users);
  });
  // User.findOne({id: jwt_payload.id}, function(err, user) {
  //   if (err) {
  //     return done(err, false);
  //   }
  //   if (user) {
  //     done(null, user);
  //   } else {
  //     done(null, false);
  //   }
  //});
}));

module.exports = {
  jwtSecret : SECRET
};
