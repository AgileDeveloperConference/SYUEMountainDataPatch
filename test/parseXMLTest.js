'use strict'

// Assert Library
var chai = require('chai');
var expect = chai.expect;

"lib"
var fileParse = require('../src/parseFiles');

describe("Read xml and parse to json",function(){
	

	it("should return json",function(done){
	this.timeout(15000);
	//Arange
	var dirPath = 'test/testFile/';	
	//Act
	var parse  = fileParse.executeParseXml(dirPath);

	parse.done(function(result){
		//Assert
		//Have success done mean it success;
		expect(result).to.have.length(1); 
		done();
  });

  });


});
