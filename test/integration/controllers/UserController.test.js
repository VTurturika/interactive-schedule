// 'use strict';
//
// var request = require('supertest');
// var should = require('should');
//
// describe('UserController', function() {
//
//   let alreadyCreated = true;
//   let testUsers = [
//     {
//       name: 'userName1',
//       surname: 'userSurname1',
//       email: 'user1@email.com',
//       role: 'student'
//     },
//     {
//       name: 'userName2',
//       surname: 'userSurname2',
//       email: 'user2@email.com',
//       role: 'student'
//     }
//   ];
//
//   describe('#createUser()', function() {
//
//     it('should create test user1', function (done) {
//
//       request(sails.hooks.http.app)
//         .post('/user/createUser')
//         .send(testUsers[0])
//         .expect(200)
//         .end((err, res) => {
//
//           // console.log('user1:\n' + res.body);
//           // alreadyCreated = res.body.status && alreadyCreated;
//
//           done();
//         });
//
//     });
//
//     it('should create test user2', function (done) {
//
//       request(sails.hooks.http.app)
//         .post('/user/createUser')
//         .send(testUsers[1])
//         .expect(200)
//         .end((err, res) => {
//
//           // console.log('user2:\n' + res.body);
//           // alreadyCreated = res.body.status && alreadyCreated;
//
//           done();
//         });
//
//     });
//
//   });
//
//   describe('#getUsers()', function() {
//
//     it('should return array of users', function (done) {
//       request(sails.hooks.http.app)
//         .post('/user/getUsers')
//         .expect(200)
//         .end((err, res) => {
//
//           res.body.should.be.Array();
//           done();
//         });
//     });
//
//     it('should return user1 and user2', function (done){
//       request(sails.hooks.http.app)
//         .post('/user/getUsers')
//         .expect(200)
//         .end((err, res) => {
//
//           //TODO add assert res.body and testUsers
//          // console.log(res.body);
//           done();
//         });
//     });
//
//   });
// });
