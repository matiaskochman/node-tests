var db = require('./db');

module.exports.handleSignup = (email,password) =>{
  //check if email already exists
  //saveUser
  db.saveUser({email,password});
  //send welcome email
}
