'use strict';

var request = require('supertest');
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

  describe('createLesson()', function() {

    it('should create lesson1', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/createLesson')
        .send(lesson1)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(lesson1);
          lesson1.id = res.body.id;

          done();
        });
    });

    it('should create lesson2', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/createLesson')
        .send(lesson2)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(lesson2);
          lesson2.id = res.body.id;

          done();
        });
    });

  });

  describe('getLessons()', function() {

    it('should return only lesson1', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/getLessons')
        .send({
          id: lesson1.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(lesson1);

          done();
        });

    });

    it('should return only lesson2', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/getLessons')
        .send({
          id: lesson2.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(lesson2);

          done();
        });

    });

    it('should return lesson1 and lesson2', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/getLessons')
        .send({
          faculty: 'fizmat'
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.containDeep([lesson1, lesson2]);

          done();
        });

    });

  });

  describe('updateLesson()', function() {

    it('should update only user1', function (done) {

      lesson1.classroom = '202';
      request(sails.hooks.http.app)
        .post('/lesson/updateLesson')
        .send({
          oldId: lesson1.id,
          classroom: lesson1.classroom
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(lesson1);

          request(sails.hooks.http.app)
            .post('/lesson/getLessons')
            .send({
              id: lesson2.id
            })
            .expect(200)
            .end((err, res) => {

              res.body.should.be.Array();
              res.body.should.have.length(1);
              res.body[0].should.containDeep(lesson2);

              done();
            });

        });
    });

  });

  describe('destroyLesson()', function() {

    it('should remove lesson1 from database', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/destroyLesson')
        .send({
          lessonId : lesson1.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(lesson1);

          done();
        });
    });

    it('should remove lesson2 from database', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/destroyLesson')
        .send({
          lessonId : lesson2.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(lesson2);

          done();
        });
    });

  });

});

