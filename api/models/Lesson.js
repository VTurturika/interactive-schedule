/**
 * Lesson.js
 *
 * @description :: Represents instance of a lesson in our Schedule. Have relation (many-1) with user (teacher) and a day
 *
 * name - название предмета
 * datetime - дата + время начала пары
 * building - строение (0-улица, 2 - двухэтажка...)
 * classroom - номер аудитории
 * faculty - факультет (поддержка физмата и иньяза) todo: добавить больше факультетов в соотв с расписанием
 * groupId - номер группы у которой пара
 * teacherId - ссылка на учителя, many-1
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    datetime: {
      type: 'datetime',
      required: true,
    },
    building: {
      type: 'integer',
      required: 'true',
      enum: [2, 5, 7, 0],
    },
    classroom: {
      type: 'string',
      required: true,
    },
    faculty: {
      type: 'string',
      required: true,
      enum: ['fizmat', 'inyaz'],

    },
    groupId: {
      type: 'string',
      required: true,
    },
    teacherId: {
      model: 'user',
    },
  }
};
