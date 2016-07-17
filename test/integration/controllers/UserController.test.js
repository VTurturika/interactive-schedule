'use strict';

var request = require('supertest');
var should = require('should');

describe('UserController', function() {

  let testUser1 = {
        name: 'controllerUserName1',
        surname: 'controllerUserSurname1',
        email: 'controllerUser1@email.com',
        role: 'student'
      },
      testUser2 = {
        name: 'controllerUserName2',
        surname: 'controllerUserSurname2',
        email: 'controllerUser2@email.com',
        role: 'student'
      },
      testTeacher = {
        name: 'testTeacherName',
        surname: 'testTeacherSurname',
        email: 'testTeacher@email.com',
        role: 'teacher'
    };

  describe('createUser()', function() {

    it('should create test user1', function (done) {

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(testUser1)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(testUser1);
          testUser1.id = res.body.id;

          done();
        });

    });

    it('should create test user2', function (done) {

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(testUser2)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(testUser2);
          testUser2.id = res.body.id;

          done();
        });

    });

    it('should create testTeacher', function (done) {

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(testTeacher)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(testTeacher);
          testTeacher.id = res.body.id;

          done();
        });

    });

    it('should return bad request', function (done) {

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(testUser1)
        .expect(400)
        .end(done())
      });

  });

  describe('getUsers()', function() {

    it('should return array of users', function (done) {
      request(sails.hooks.http.app)
        .post('/user/getUsers')
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();

          done();
        });
    });

    it('should return user1 and user2', function (done){
      request(sails.hooks.http.app)
        .post('/user/getUsers')
        .send({
          role: 'student'
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.containDeep([testUser1, testUser2]);
          done();
        });
    });

  });

  describe('updateUser', function () {

    it('should update only user1', function (done) {

      testUser1.surname = 'ControllerUserSurname1';
      request(sails.hooks.http.app)
        .post('/user/updateUser')
        .send({
          oldId : testUser1.id,
          surname : testUser1.surname
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(testUser1);

          request(sails.hooks.http.app)
            .post('/user/getUsers')
            .send({
                email: testUser2.email
            })
            .expect(200)
            .end((err, res) => {

              res.body.should.be.Array();
              res.body.should.have.length(1);
              res.body[0].should.containDeep(testUser2);

              done();
            });
        });
    });

  });

  describe('assignLesson()', function () {

    let testLesson = {
        name: 'serviceTest1Lesson',
        datetime: new Date().toISOString(),
        building: 7,
        classroom: '214',
        faculty: 'fizmat',
        groupId: '36'
      };

    it('should create testLesson', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/createLesson')
        .send(testLesson)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(testLesson);
          testLesson.id = res.body.id;

          done();
        });
    });


    it('should assign testLesson to testTeacher', function(done) {

      request(sails.hooks.http.app)
        .post('/user/assignLesson')
        .send({
          lessonId: testLesson.id,
          teacherId: testTeacher.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.lessons.should.be.Array();
          res.body.lessons.should.have.length(1);
          res.body.lessons[0].should.containEql(testLesson);

          done();
        });

    });

    it('should unassign testLesson to testTeacher', function(done) {

      request(sails.hooks.http.app)
        .post('/user/unassignLesson')
        .send({
          lessonId: testLesson.id,
          teacherId: testTeacher.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.lessons.should.be.Array();
          res.body.lessons.should.have.length(0);

          done();
        });

    });


    it('should remove testLesson from database', function (done) {

      request(sails.hooks.http.app)
        .post('/lesson/destroyLesson')
        .send({
          lessonId : testLesson.id
        })
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(testLesson);

          done();
        });
    });


  });

  describe('destroyUser()', function () {

    it('should remove user1 from database', function (done) {

      request(sails.hooks.http.app)
        .post('/user/destroyUser')
        .send({userId : testUser1.id})
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(testUser1);

          request(sails.hooks.http.app)
            .post('/user/getUsers')
            .send({
              id: testUser2.id
            })
            .expect(200)
            .end((err, res) => {

              res.body.should.be.Array();
              res.body.should.have.length(1);
              res.body[0].should.containDeep(testUser2);

            });

          done();
        });
    });

    it('should remove user2 from database', function (done) {

      request(sails.hooks.http.app)
        .post('/user/destroyUser')
        .send({userId : testUser2.id})
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(testUser2);
          done();
        });
    });

    it('should remove testTeacher from database', function (done) {

      request(sails.hooks.http.app)
        .post('/user/destroyUser')
        .send({userId : testTeacher.id})
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();
          res.body.should.have.length(1);
          res.body[0].should.containDeep(testTeacher);
          done();
        });
    });
  });

});
