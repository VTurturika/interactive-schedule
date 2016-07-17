"use strict";

module.exports = {

  //TODO must be tested with new Lessons definition

  getLessons: function (constraints, next) {
    Lesson.find(constraints)
          .populate('teacherId')
          .populate('subscribedBy')
          .exec((err, lessons) => {
            if (err) {
              next(err, null)
            }
            else {
              next(null, lessons);
            }
          });
  },

  createLesson: function (lessonInfo, next) {
    Lesson.create(lessonInfo).exec((err, lesson) => {
      if (err) {
        next(err, null)
      }
      else {
        next(null, lesson)
      }
    });
  },

  destroyLesson: function (lessonInfo, next) {
    Lesson.destroy(lessonInfo).exec((err, lesson) => {
      if (err) {
        next(err, null);
      }
      else {
        next(null, lesson)
      }
    });
  },

  updateLesson: function (oldLessonId, newData, next) {
    Lesson.update(oldLessonId, newData).exec((err, updated) => {
      if (err) {
       next(err, null);
      }
      else {
        next(null, updated);
      }
    });
  },

  subscribeToLesson: function (lessonId, userId, next) {

    Lesson.findOne(lessonId).exec((err, lesson) => {

      if(err) {
        next(err, null)
      }
      else {
        lesson.subscribedBy.add(userId);
        lesson.save((err) => {
          if(err) {
            next(err, null)
          }
          else {
            this.getLessons({id: lessonId}, (err, lesson) => {

              if(err) next(err, null);
              else {

                let result = {
                  lessonId: lesson[0].id,
                  subscribedBy: lesson[0].subscribedBy
                };

               return next(null, result);

              }
            })
          }
        })
      }

    });
  },

  unsubscribeToLesson: function (lessonId, userId, next) {

    Lesson.findOne(lessonId).exec((err, lesson) => {

      if(err) {
        next(err, null)
      }
      else {
        lesson.subscribedBy.remove(userId);
        lesson.save((err) => {
          if(err) {
            next(err, null)
          }
          else {
            this.getLessons({id: lessonId},(err, lesson) => {

              if(err) next(err, null);
              else {

                let result = {
                  lessonId: lesson[0].id,
                  subscribedBy: lesson[0].subscribedBy
                };

                return next(null, result);

              }
            })
          }
        })
      }

    });
  }
};
