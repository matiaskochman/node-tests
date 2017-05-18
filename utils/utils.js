var add = (a,b) => a + b;

var asyncAdd = (a,b,callback) =>{
  setTimeout(()=>{
    callback(a+b);
  },1000);
}

var square = x => x * x;

var asyncSquare = (x,callback) =>{
  setTimeout(()=>{
    callback(x*x);
  },1000);
}

var splitNames = (user, fullname) =>{
  var names = fullname.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports = {
  add,
  square,
  splitNames,
  asyncAdd,
  asyncSquare
}
