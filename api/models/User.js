/**
 * User.js
 *
 * @description :: Represents instance of a user. May be admin, teacher or student. Has relation (1-many) with Lesson
 *
 * name - имя пользователя
 * surname - фамилия
 * role - роль на сайте (админ/учитель/пользователь).
 * socialId - todo социальыне сети
 * email - email
 * lessons - ссылка на предметы, которые ведет этот учитель (1-many)
 * todo password, authenification
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    surname: {
      type: 'string',
      required: true
    },
    //TODO maybe need add native Waterline email validation
    email: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string',
    },
    role: {
      type: 'string',
      enum: ['admin', 'teacher', 'groupLeader', 'student'],
      required: true
    },

    statusConfirmed: {
      type: 'boolean',

      defaultsTo : function() {
        return this.role == 'student';
      }
    },

    facebookId: {
      type: 'string'
    },

    facebookToken: {
      type: 'string'
    },

    googleId: {
      type: 'string'
    },

    googleToken: {
      type: 'string'
    },

    vkId: {
      type: 'string'
    },

    vkToken: {
      type: 'string'
    },

    //only for teachers, many teachers - many lessons
    lessons: {
      collection: 'lesson',
      via: 'teacherId'
    },

    //for all users, many users - many lessons
    subscribeList: {
      collection: 'lesson',
      via: 'subscribedBy'
    },

    //for all users, one user - many sessions
    sessions: {
      collection: 'session',
      via: 'user'
    }
  },

  beforeCreate: function (values, next) {
    JwtService.hashPassword(values);
    next();
  },

  beforeUpdate: function (values, next) {

    User.findOne({id: values.id}).exec((err, user) => {
      if(user.password != values.password)
        JwtService.hashPassword(values);
      next();
    })
   }

};
