'use strict';

let passport = require('passport');

module.exports = {

  login: function (req, res) {

    passport.authenticate('vkontakte', {scope: ['profile', 'email']})(req, res);

  },

  callback: function(req, res) {

    passport.authenticate('vkontakte', (error, result, info) => {

      res.json({
        error: error,
        result: result,
        info: info
      })

    })(req, res);
  }
};
