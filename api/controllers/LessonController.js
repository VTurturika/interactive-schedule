"use strict";

/**
 * LessonController
 *
 * @description :: Server-side logic for managing Lessons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `LessonController.createLesson()`
   */
  createLesson: function (req, res) {

    let lesson = {};

    lesson.name = req.body.name || undefined;
    lesson.datetime = req.body.datetime || undefined; // new Date().toISOString()
    lesson.teacherId = req.body.teacherId || undefined; // PK(id) of User with role Teacher
    lesson.building = req.body.building || 0;
    lesson.classroom = req.body.classroom || undefined;
    lesson.faculty = req.body.faculty || undefined;
    lesson.groupId = req.body.groupId || undefined;


    LessonService.createLesson(lesson, lesson => {
      res.json(lesson);
    });
  },

  /**
   * `LessonController.destroyLesson()`
   */
  destroyLesson: function (req, res) {
    const sudoWord = req.body.sudo || undefined;
    if (sudoWord !== process.env.sudoWord) {
      return res.forbidden('Wrong SUDO word');
    }
    const lessonId = req.body.lessonId || req.body.lesson.id || undefined;
    LessonService.destroyLesson({id: lessonId}, success => {
      res.json(success);
    });
  },

  /**
   * `LessonController.updateLesson()`
   */
  updateLesson: function (req, res) {
    let oldId = req.body.oldId;
    if (!oldId) {
      return res.badRequest('You need to specify ID of subject to change');
    }

    let lesson = {};

    if (req.body.name)
      lesson.name = req.body.name;
    if (req.body.datetime)
      lesson.datetime = req.body.datetime;
    if (req.body.teacherId)
      lesson.teacherId = req.body.teacherId;
    if (req.body.building)
      lesson.building = req.body.building;
    if (req.body.faculty)
      lesson.faculty = req.body.faculty;
    if (req.body.classroom)
      lesson.classroom = req.body.classroom;
    if (req.body.groupId)
      lesson.groupId = req.body.groupId;
    if (req.body.id)
      lesson.id = req.body.id;
    if (req.body.createdAt)
      lesson.createdAt = req.body.createdAt;


    LessonService.updateLesson(oldId, lesson, lesson => {
      res.json(lesson);
    });
  },

  /**
   * `LessonController.subscribeToLesson()`
   */
  subscribeToLesson: function (req, res) {

    LessonService.subscribeToLesson(req.body.lessonId, req.body.userId, success => {
      return res.json(success);
    });
  },

  /**
   *
   */
  getLessons: function (req, res) {

    let lesson = {};

    if (req.param('name'))
      lesson.name = req.param('name');
    if (req.param('datetime'))
      lesson.datetime = req.param('datetime');
    if (req.param('teacherId'))
      lesson.teacherId = req.param('teacherId');
    if (req.param('classroom'))
      lesson.classroom = req.param('classroom');
    if (req.param('groupId'))
      lesson.groupId = req.param('groupId');
    if (req.param('id'))
      lesson.id = req.param('id');
    if (req.param('createdAt'))
      lesson.createdAt = req.param('createdAt');
    if (req.param('updatedAt'))
      lesson.updatedAt = req.param('updatedAt');
    if (req.param('building'))
      lesson.building = req.param('building');
    if (req.param('faculty'))
      lesson.faculty = req.param('faculty');

    LessonService.getLessons(lesson, lessons => {
      return res.json(lessons);
    });
  },
};

