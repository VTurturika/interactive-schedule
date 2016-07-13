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

      sails.services.lessonservice.createLesson(lesson1, (err, res) => {
        if(err) {
          console.log('Error in LessonService.creteLesson()');
        }
        else {
          delete lesson1.datetime;
          res.should.containDeep(lesson1);
          lesson1.id = res.id;
        }

        done();
      });
    });

    it('should create lesson2', function (done) {

      sails.services.lessonservice.createLesson(lesson2, (err, res) => {
        if(err) {
          console.log('Error in LessonService.creteLesson()');
        }
        else {
          delete lesson2.datetime;
          res.should.containDeep(lesson2);
          lesson2.id = res.id;
        }

        done();
      });

    });
  });

  describe('#getLessons()', function() {

    it('should return only lesson1', function (done) {

      sails.services.lessonservice.getLessons({id: lesson1.id}, (err, res) => {

        if(err) {
          console.log('Error in LessonService.getLessons()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containDeep(lesson1);
        }
        done();
      });
    });

    it('should return only lesson2', function (done) {

      sails.services.lessonservice.getLessons({id: lesson2.id}, (err, res) => {

        if(err) {
          console.log('Error in LessonService.getLessons()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containDeep(lesson2);
        }
        done();
      });
    });


    it('should return lesson1 and lesson2', function (done) {

      sails.services.lessonservice.getLessons({faculty: 'fizmat'}, (err, res) => {

        if(err) {
          console.log('Error in LessonService.getLessons()');
        }
        else {
          res.should.be.Array();
          res.should.containDeep([lesson1, lesson2]);
        }
        done();
      });
    });

  });

  describe('#updateLesson()', function() {

    it('should update only lesson1', function (done) {

      lesson1.classroom = '202';
      sails.services.lessonservice.updateLesson(lesson1.id,
        {classroom: lesson1.classroom},
        (err, res) => {
          if(err) {
            console.log('Error in LessonService.getLessons()');
          }
          else {
            res.should.be.Array();
            res.should.have.length(1);
            res[0].should.containEql(lesson1);

            sails.services.lessonservice.getLessons({id: lesson2.id}, (err, res) => {

              res.should.be.Array();
              res.should.have.length(1);
              res[0].should.containEql(lesson2);

              done();
            });
          }
        });

    });

  });

  describe('#destroyUser()', function() {

    it('should remove lesson1 form database', function (done) {

      sails.services.lessonservice.destroyLesson(lesson1.id, (err, res) => {

        if(err) {
          console.log('Error in LessonService.destroyLesson()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containDeep(lesson1);
        }
        done();
      });

    });

    it('should remove lesson2 form database', function (done) {

      sails.services.lessonservice.destroyLesson(lesson2.id, (err, res) => {

        if(err) {
          console.log('Error in LessonService.destroyLesson()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containDeep(lesson2);
        }
        done();
      });

    });

  });

});

