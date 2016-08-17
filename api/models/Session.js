'use strict';
/**
 * Session.js
 *
 * @description :: Represents user session, relation one user - many sessions.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,

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

    startedAt: {
      type: 'datetime',
      required: true,
    },

    finishedAt: {
      type: 'datetime',
      required: true,
    },

    user: {
      model: 'user'
    }
  }

};
