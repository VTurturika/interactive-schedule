'use strict';
/**
 * Session.js
 *
 * @description :: Represents user session, relation one user - many sessions.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    token: {
      type: 'string',
      required: true,
      unique: true //must be unique
    },

    refreshToken: {
      type: 'string',
      required: true,
    },

    //in seconds
    expiresIn: {
      type: 'integer',
      required: true,
      defaultsTo: 10800 //3 hours
    },

    start: {
      type: 'datetime',
      required: true,
      defaultsTo: new Date().toISOString()
    },

    // end: {
    //
    // },

    user: {
      model: 'user'
    }
  }

};
