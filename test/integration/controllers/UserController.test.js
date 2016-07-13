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
      };

  describe('#createUser()', function() {

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

    it('should return bad request', function (done) {

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(testUser1)
        .expect(400)
        .end(done())
      });

  });

  describe('#getUsers()', function() {

    it('should return array of users', function (done) {
      request(sails.hooks.http.app)
        .post('/user/getUsers')
        .expect(200)
        .end((err, res) => {

          done();
        });
    });

    it('should return user1 and user2', function (done){
      request(sails.hooks.http.app)
        .post('/user/getUsers')
        .expect(200)
        .end((err, res) => {

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

          done();
        });
    });

  });

  describe('#destroyUser()', function () {

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
  });

});
