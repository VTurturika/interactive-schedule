/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.globals.html
 */

var endpoint = process.env.DEPLOY ? 'https://kspu-schedule.herokuapp.com/'
                                  :  'http://localhost:1337/';

module.exports.globals = {

  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',

  OAUTH2_CLIENT_ID: process.env.OAUTH2_CLIENT_ID || 'OAUTH2_CLIENT_ID',
  OAUTH2_CLIENT_SECRET: process.env.OAUTH2_CLIENT_SECRET || 'OAUTH2_CLIENT_SECRET',

  SESSION_EXPIRATION_TIME: process.env.SESSION_EXPIRATION_TIME || 10800, // 3 hours

  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID || 'FACEBOOK_CLIENT_ID',
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET || 'FACEBOOK_CLIENT_SECRET',
  FACEBOOK_CALLBACK: endpoint + 'auth/facebook/callback',

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'GOOGLE_CLIENT_ID',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || 'GOOGLE_CLIENT_SECRET',
  GOOGLE_CALLBACK: endpoint + 'auth/google/callback',

  VK_CLIENT_ID: process.env.VK_CLIENT_ID || 'VK_CLIENT_ID',
  VK_CLIENT_SECRET: process.env.VK_CLIENT_SECRET || 'VK_CLIENT_SECRET',
  VK_CALLBACK: endpoint + 'auth/vk/callback'

  /****************************************************************************
  *                                                                           *
  * Expose the lodash installed in Sails core as a global variable. If this   *
  * is disabled, like any other node module you can always run npm install    *
  * lodash --save, then var _ = require('lodash') at the top of any file.     *
  *                                                                           *
  ****************************************************************************/

	// _: true,

  /****************************************************************************
  *                                                                           *
  * Expose the async installed in Sails core as a global variable. If this is *
  * disabled, like any other node module you can always run npm install async *
  * --save, then var async = require('async') at the top of any file.         *
  *                                                                           *
  ****************************************************************************/

	// async: true,

  /****************************************************************************
  *                                                                           *
  * Expose the sails instance representing your app. If this is disabled, you *
  * can still get access via req._sails.                                      *
  *                                                                           *
  ****************************************************************************/

	// sails: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's services as global variables (using their       *
  * "globalId"). E.g. a service defined in api/models/NaturalLanguage.js      *
  * would have a globalId of NaturalLanguage by default. If this is disabled, *
  * you can still access your services via sails.services.*                   *
  *                                                                           *
  ****************************************************************************/

	// services: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's models as global variables (using their         *
  * "globalId"). E.g. a model defined in api/models/User.js would have a      *
  * globalId of User by default. If this is disabled, you can still access    *
  * your models via sails.models.*.                                           *
  *                                                                           *
  ****************************************************************************/

	// models: true
};
