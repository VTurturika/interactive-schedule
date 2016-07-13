'use strict';

var should = require('should');

describe('LessonService', function() {


  let lesson1 = {
        name: 'serviceTest1Lesson',
        datetime: new Date().toISOString(),
        building: 7,
        classroom: '214',
        faculty: 'fizmat',
        groupId: '36'
    },
      lesson2 = {
        name: 'serviceTest2Lesson',
        datetime: new Date().toISOString(),
        building: 0,
        classroom: '01',
        faculty: 'fizmat',
        groupId: '16'
    };

  describe('#createLesson()', function() {

    it('should create lesson1', function (done) {

//      sails.services.lessonservice.createLesson(lesson1, (err, ));

      done();
    });

    it('should create lesson1', function (done) {
      done();
    });

  });

  describe('#getLessons()', function() {

    it('test case', function (done) {
      done();
    });


  });

  describe('#updateLesson()', function() {

    it('test case', function (done) {
      done();
    });

  });

  describe('#destroyUser()', function() {

    it('test case', function (done) {
      done();
    });

  });

});

