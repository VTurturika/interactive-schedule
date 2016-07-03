/**
 * User.js
 *
 * @description :: Represents instance of a user. May be admin, teacher or student. Has relation (1-many) with Lesson
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,

  attributes: {
    name: {
      type: 'text',
      required: true,
    },
    surname: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
      enum: ['admin', 'teacher', 'student'],
      required: true,
    },
    socialId: {
      type: 'string',
    },
    email: {
      type: 'string',
      required: true,
    },
    lessons: {
      collection: 'lesson',
      via: 'teacherId',
    },
  }
};

