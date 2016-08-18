'use strict';

module.exports = {

  login: function (req, res) {

    res.end('google login');
  },

  callback: function(req, res) {

    res.end('google callback')
  }
};
