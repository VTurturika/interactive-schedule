/**
 * 401 (Unauthorized) Response
 * Similar to 403 Forbidden.
 * Specifically for authentication failed or not yet provided.
 */
module.exports = function (data, code, message, root) {

  var response = _.assign({
    code: code || 401,
    message: message || 'Unauthorized',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (401 Unauthorized)\n', response);

  this.res.status(401);
  this.res.jsonx(response);
};
