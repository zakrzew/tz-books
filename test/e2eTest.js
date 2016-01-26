var request = require('supertest');
var express = require('express');
var stockRepository = require ("../inmemoryrepo")();
var app = require ("../app")(stockRepository);
var assert = require('assert');


var weareintests = true;

describe('POST /stock', function(){
  it('check /stock return parameters', function(done){
    request(app)
      .post('/stock').send({"isbn": "1233335", "count": 2})
      .set('Accept', 'application/json')
     // .expect('Content-Type', /json/)
	  .end(function(err, res){
		  assert.equal(res.body.isbn, "1233335");
		  done();
	  });
  //    .expect(200, done);
  }),
  it('check /stock returns ok', function(done){
    request(app)
      .get('/stock')
      .set('Accept', 'application/json')
     // .expect('Content-Type', /json/)
	 
     .expect(200, done);
  })
})