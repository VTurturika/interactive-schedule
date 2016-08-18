'use strict';

let passport = require('passport');

module.exports = {

  login: function (req, res) {

    passport.authenticate('facebook', {scope: ['email']})(req, res);

  },

  callback: function(req, res) {

    passport.authenticate('facebook', (error, result, info) => {

      res.json({
        error: error,
        result: result,
        info: info
      })

    })(req, res);
  }
};
