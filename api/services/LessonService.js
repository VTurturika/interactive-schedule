"use strict";

module.exports = {
  getLessons: function (constraints, next) {
    Lesson.find(constraints)
          .populate('teacherId')
          .exec((err, lessons) => {
      if (err)
        throw err;
      next(lessons);
    });
  },
  createLesson: function (lessonInfo, next) {
    Lesson.create(lessonInfo).exec((err, lesson) => {
      if (err)
        return next(err);
      next(lesson);
    });
  },
  destroyLesson: function (lessonInfo, next) {
    Lesson.destroy(lessonInfo).exec((err, lesson) => {
      if (err)
        return next(err);
      next(lesson);

    });
  },
  updateLesson: function (oldLessonId, newData, next) {
    Lesson.update(oldLessonId, newData).exec((err, updated) => {
      if (err)
        return next(err);
      next(updated);
    });

  }
};
