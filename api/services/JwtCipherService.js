var bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

module.exports = {

  /**
  * Hash the password field of the passed user.
  */
  hashPassword: function (user) {
    if (user.password) {
      console.log('password before: ' + user.password);
      //TODO rewrite to async style
      user.password = bcrypt.hashSync(user.password, 10);
      console.log('password after: ' + user.password);
    }
  },

  /**
  * Compare user password hash with unhashed password
  * @returns boolean indicating a match
  */
  comparePassword: function(password, user){
    //TODO rewrite to async style
    return bcrypt.compareSync(password, user.password);
  },

  /**
  * Create a token based on the passed user
  * @param user
  */
  createToken: function(user) {

    return jwt.sign({
      id: user.id
    },
    sails.config.jwtSecret);
  }
};
