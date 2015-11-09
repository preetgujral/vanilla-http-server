
//There should be tests using chaiHTTP for both routes

var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

require(__dirname + '/server.js');

describe('vanilla http server: ', function(){

  //description
  describe( 'server tests',function(){
    it( 'server status should be 200', function(done) {
      chai.request( 'localhost:3000' )
      .get( '/time' )
      .end( function (err, res) {
        expect( res.status ).to.eql(200);
        done();
      });
    });
  });

  describe( 'test time page',function(){
    it( 'should return todays date', function(done) {
      chai.request( 'localhost:3000' )
      .get( '/time' )
      .end( function (err, res) {
        expect( res.text.substr(0,33)).to.eql("server date and time is: Sun Nov ");
        done();
      });
    });

    it( 'should use GET method', function(done) {
      chai.request( 'localhost:3000' )
      .get( '/time' )
      .end( function (err, res) {
        //console.dir(res)
        expect( res.req.method ).to.eql("GET");
        done();
      });
    });
  });

  describe( 'test greet page',function(){
    it( 'should receive a GET request', function(done) {
      chai.request( 'localhost:3000' )
      .get( '/greet' )
      .end( function (err, res) {
        expect( res.req.method ).to.eql("GET");
        done();
      });
    });

    it( 'should respond with an html file', function(done) {
      chai.request( 'localhost:3000' )
      .get( '/greet' )
      .end( function (err, res) {
        expect( res.res).to.be.html;
        done();
      });
    });

    it( 'should respond to POST', function(done) {
      chai.request( 'localhost:3000' )
      .post( '/greet' )
      .end( function (err, res) {
        //console.dir(res)
        expect( res.req.method ).to.eql("POST");
        done();
      });
    });

    // it( 'should return a personalized greeting', function(done) {
    //   chai.request( 'localhost:3000' )
    //   .post( '/greet' )
    //   ////cant figure out how to test filling out the form and submitting (I want to and then check for the querystring
    //   .send ( {namebox:"Preet"})
    //   .end( function (err, res) {
    //     //console.dir(res)
    //     //console.log(res.res)
    //     expect( res.res.text).to.eql("Welcome to the world of tomorrow Preet");
    //     done();
    //   });
    // });
  });
  //End of vanilla http server test
});

/*Things you want to test
1. get - check that page content at first n indexes of string deeply equals "server date and time is: Sun Nov 08 2015"
2. post - check that you are getting the query string from the post request
3. post - check that you are returning the string you expect "Welcome to the world of tomorrow Preet"




*/
