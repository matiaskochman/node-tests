const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.status(200).send('Hola pianola.');
});

app.get('/error',(req,res)=>{
  res.status(404).send({
    error:'Page not found.',
    title:'El titulo.'
  })
})

app.get('/users',(req,res)=>{
  res.status(200).send([{
    name:'nombre1',
    age:'edad1'
  },{
    name:'nombre2',
    age:'edad2'
  }])
})
app.listen(3000);

module.exports.app = app;
