const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App',()=>{

  var db ={
    saveUser:expect.createSpy()
  };
  app.__set__('db',db);

  it('should be called spy correctly',()=>{
    var spy = expect.createSpy();
    spy('Matias',36);
    expect(spy).toHaveBeenCalledWith('Matias',36);
  });

  it('shold call saveUser with user object',()=>{
    var email = 'matias.kochman.jobsearch@gmail.com';
    var password = '123';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
})
