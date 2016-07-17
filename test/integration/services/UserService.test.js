'use strict';

var should = require('should');

describe('UserService', function() {


  let testUser1 = {
        name: 'serviceUserName1',
        surname: 'serviceUserSurname1',
        email: 'serviceUser1@email.com',
        role: 'student'
    },

    testUser2 = {
        name: 'serviceUserName2',
        surname: 'serviceUserSurname2',
        email: 'serviceUser2@email.com',
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

        sails.services.userservice.createUser(testUser1, (err, res) => {
         if(err) {
           err.should.be.Error();
           console.log('user1 already created!\n');
         }
         else {
           res.should.containEql(testUser1);
         }

          done();
        });
    });

    it('should create test user2', function (done) {

      sails.services.userservice.createUser(testUser2, (err, res) => {
        if(err) {
          err.should.be.Error();
          console.log('user2 already created!\n');
        }
        else {
          res.should.containEql(testUser2);
        }

        done();
      });
    });

    it('should create testTeacher', function (done) {

      sails.services.userservice.createUser(testTeacher, (err, res) => {
        if(err) {
          err.should.be.Error();
          console.log('user2 already created!\n');
        }
        else {
          res.should.containEql(testTeacher);
          testTeacher.id = res.id;
        }

        done();
      });
    });

  });

  describe('getUsers()', function() {

    it('should returns array of users', function (done) {

      sails.services.userservice.getUsers(null, (err, res) => {
        if(err) {
          console.log('Error in UserService.getUsers()');
        }
        else {
          res.should.be.Array();
        }

        done();
      });

    });

    it('should returns testUser1', function(done) {

      sails.services.userservice.getUsers({email: testUser1.email}, (err, res) => {

        if(err) {
          console.log('Error in UserService.getUsers()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1)
          res[0].should.containEql(testUser1);
          testUser1.id = res[0].id;
        }

        done();

      });
    });

    it('should returns testUser2', function(done) {

      sails.services.userservice.getUsers({email: testUser2.email}, (err, res) => {

        if(err) {
          console.log('Error in UserService.getUsers()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containEql(testUser2);
          testUser2.id = res[0].id;
        }

        done();

      });
    });

    it('should returns testUser1 and testUser2', function(done) {

      sails.services.userservice.getUsers({role: 'student'}, (err, res) => {

        if(err) {
          console.log('Error in UserService.getUsers()');
        }
        else {
          res.should.be.Array();
          res.should.containDeep([testUser1, testUser2]);
        }
        done();

      });
    });

  });

  describe('updateUser()', function() {

    it('should update only user1', function (done) {

      testUser1.surname = 'ServiceUserSurname1';
      sails.services.userservice.updateUser(testUser1.id,
                                          { surname : testUser1.surname},
                                          (err, res) => {
          if(err) {
            console.log('Error in UserService.updateUser()');
          }
          else {
            res.should.be.Array();
            res.should.have.length(1);
            res[0].should.containEql(testUser1);

            sails.services.userservice.getUsers({id:testUser2.id}, (err, res) => {

              res.should.be.Array();
              res.should.have.length(1);
              res[0].should.containEql(testUser2);

              done();
            })
          }
        });
    });

  });

  describe('assignLesson()', function () {

    let testLesson = {
        name: 'assignTestLesson',
        datetime: new Date().toISOString(),
        building: 7,
        classroom: '214',
        faculty: 'fizmat',
        groupId: '36'
      };

    it('should create testLesson', function (done) {

      sails.services.lessonservice.createLesson(testLesson, (err, res) => {
        if(err) {
          console.log('Error in LessonService.creteLesson()');
        }
        else {
          delete testLesson.datetime;
          res.should.containDeep(testLesson);
          testLesson.id = res.id;
        }

        done();
      });
    });

    it('should assign testLesson to testTeacher', function (done) {

      sails.services.userservice.assignLesson(testTeacher.id, testLesson.id, (err, teacher) => {
        if(err) {
          console.log('Error in LessonService.assignLesson()');
        }
        else {
          teacher.should.be.Array();
          teacher.should.have.length(1);

          teacher[0].lessons.should.be.Array();
          teacher[0].lessons.should.have.length(1);
          teacher[0].lessons[0].should.containEql(testLesson);

        }
        done();
      })

    });


    it('should remove testLesson form database', function (done) {

      sails.services.lessonservice.destroyLesson(testLesson.id, (err, res) => {

        if(err) {
          console.log('Error in LessonService.destroyLesson()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containDeep(testLesson);
        }
        done();
      });

    });


  });

  describe('destroyUser()', function() {

    it('should remove user1 from database', function (done) {

      sails.services.userservice.destroyUser({id : testUser1.id}, (err, res) => {

        if(err) {
          console.log('Error in UserService.destroyUser()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containEql(testUser1);
        }
        done();
      });

    });

    it('should remove user2 from database', function (done) {

      sails.services.userservice.destroyUser({id : testUser2.id}, (err, res) => {

        if(err) {
          console.log('Error in UserService.destroyUser()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containEql(testUser2);
        }
        done();
      });

    });

    it('should remove testTeacher from database', function (done) {

      sails.services.userservice.destroyUser({id : testTeacher.id}, (err, res) => {

        if(err) {
          console.log('Error in UserService.destroyUser()');
        }
        else {
          res.should.be.Array();
          res.should.have.length(1);
          res[0].should.containEql(testTeacher);
        }
        done();
      });

    });


  });

});

