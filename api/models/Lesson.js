/**
 * Lesson.js
 *
 * @description :: Represents instance of a lesson in our Schedule. Have relation (many-1) with user (teacher) and a day
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  identity: 'lesson',

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    time: {
      type: 'time',
      required: true,
    },
    teacher: {
      collection: 'user',
      via: 'owner',
      index: true,
      required: true,
    },
    classroom: {
      type: 'string',
    },
    group: {
      type: 'integer',
      required: true,
    },
    owner: {
      model: 'user',
      required: true,
    },
    day: {
      model: 'day',
      required: true,
    }
  }
};

