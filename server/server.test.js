const request = require('supertest');
var app = require('./server').app;
var expect = require('expect');

describe('Express',()=>{
  it('should return Hola pianola from express',(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect('Hola pianola.')
    .end(done);
  });

  it('should return error from express',(done)=>{
    request(app)
    .get('/error')
    .expect(404)
    .expect((res)=>{
      expect(res.body).toInclude({
        error:'Page not found.'
      })
    })
    .end(done);
  });

  it('should return users from express',(done)=>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res)=>{
      expect(res.body).toInclude({
        name:'nombre1',
        age:'edad1'
      })
    })
    .end(done);
  });
  
});
