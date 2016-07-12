'use strict';

var should = require('should');

describe('UserController', function() {

  let alreadyCreated = true,
      testUser1 = {
        name: 'userName1',
        surname: 'userSurname1',
        email: 'user1@email.com',
        role: 'student'
      },
      testUser2 = {
        name: 'userName2',
        surname: 'userSurname2',
        email: 'user2@email.com',
        role: 'student'
      };

  describe('#createUser()', function() {

    it('should create test user1', function (done) {

        sails.services.userservice.createUser(testUser1, (err, res) => {
         if(err) {
           err.should.be.Error();
           console.log('user1 already created!\n');
         }
         else {
           res.should.containEql(testUser1);
           console.log('new user:\n');
           console.log(res);
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
          console.log('\nnew user:\n');
          console.log(res);
        }

        done();
      });
    });

  });

  describe('#getUsers()', function() {

    it('should returns array of users', function (done) {

      sails.services.userservice.getUsers(null, (err, res) => {
        if(err) {
          console.log('Error in UserService.getUsers()');
        }
        else {
          res.should.be.Array();
          console.log('\nNumber of users in db: ' + res.length + '\n');
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

  describe('#updateUser()', function() {

    it('should update only user1', function (done) {

      testUser1.surname = 'UserSurname1';
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

    it('should reupdate only user1', function (done) {

      testUser1.surname = 'userSurname1';
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

  describe('#destroyUser()', function() {

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

  });

});

