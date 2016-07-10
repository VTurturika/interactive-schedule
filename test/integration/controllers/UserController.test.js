'use strict';

var request = require('supertest');
var should = require('should');

describe('UserController', function() {

  describe('#getUsers()', function() {
    it('should return not empty array of users', function (done) {
      request(sails.hooks.http.app)
        .post('/user/getUsers')
        .expect(200)
        .end((err, res) => {

          res.body.should.be.Array();

          done();
        });
    });
  });

  describe('#createUser()', function() {

    it('should create some test user', function (done) {

      let body = {
        name: 'userName',
        surname: 'userSurname',
        email: 'user@email.com',
        role: 'student'
      };

      request(sails.hooks.http.app)
        .post('/user/createUser')
        .send(body)
        .expect(200)
        .end((err, res) => {

          res.body.should.containDeep(body);

          done();
        });

    });

  });

});
