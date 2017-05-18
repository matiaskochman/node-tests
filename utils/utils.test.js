const expect = require('expect');
const utils = require('./utils');


describe('Utils',()=>{
  it('should add two numbers',()=>{
    var res = utils.add(5,10);
    expect(res).toBeA('number').toBe(15);
  })


  it('should async add two numbers',(done)=>{
    utils.asyncAdd(10,5,(res)=>{
      expect(res).toBeA('number').toBe(15);
      done();
    })
  });

  it('should square a number',()=>{
    var res = utils.square(10);
    expect(res).toBeA('number').toBe(100);
  })

  it('should async square a number',(done)=>{
    utils.asyncSquare(10,(res)=>{
      expect(res).toBeA('number').toBe(100);
      done();
    })
  });

  it('should expect some values',()=>{
    expect(12).toNotBe(13);
    expect({name:'Matias'}).toEqual({name:'Matias'},'no');
    expect([1,2,3]).toInclude(1);
    expect([1,2,3]).toExclude(5);
    expect({
      name:'Matias',
      age:'36',
      country:'Argentina'
    }).toInclude({
      age:'36'
    });

    expect({
      name:'Matias',
      age:'36',
      country:'Argentina'
    }).toExclude({
      age:'35'
    });

  });

  it('should verify first and last names are set',()=>{
    var user = {
      age:'36',
      nationality:'argentine'
    }
    var res = utils.splitNames(user,'Matias Kochman');
    expect(res).toInclude({firstName:'Matias',lastName:'Kochman'});
  });
  
});
