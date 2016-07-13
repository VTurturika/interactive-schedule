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

    // User.findOne(userId).exec((err, user) => {
    //   if (err)
    //     return next(err);
    //   console.log("USER " + JSON.stringify(user));
    //   console.log("subscribeList: " + user.subscribeList);
    //   user.subscribeList.push(lessonId);
    //   console.log("after push list: " + user.subscribeList);
    //   // user.subscribeList.add([lessonId]);
    //   console.log("after add list: " + user.subscribeList);
    //   user.save({populate: true}, err => {
    //     if (err)
    //       return next(err);
    //     User.find().populate('subscribeList').exec(() => next(user));
    //     // next(user);
    //   });
    // });

    // Lesson.findOne(lessonId).exec((err, lesson) => {
    //   if(err)
    //     return next(err);
    //   lesson.subscribedBy.push(userId);
    //   lesson.save(err => {
    //     if (err)
    //       return next(err);
    //     User.findOne(userId).exec((err, user) => {
    //       if(err)
    //         return next(err);
    //       user.subscribeList.push(lessonId);
    //       user.save({populate: true},(err) => {
    //         if (err)
    //           return next(err);
    //         User.findOne({id:user.id}).exec((err, user) => {
    //           console.log(user.subscribeList)
    //           return next(user);
    //         });
    //       });
    //     });
    //   });
    // });
    User.findOne(userId).exec((err, user) => {
      console.log(user.subscribeList)
      user.subscribeList.push(lessonId);
      sails.services.userservice.updateUser(userId, {subscribeList: user.subscribeList}, () => {
        Lesson.findOne(lessonId).exec((err, lesson) => {
          lesson.subscribedBy.push(userId);
          sails.services.lessonservice.updateLesson(lessonId, {subscribedBy: lesson.subscribedBy}, () => {
            UserLesson.find().populate('user').populate('lesson').exec(err => {
              if (err)
                return next(err);
              next(user);
            })
          });
        });
      });
    });
  }
};
