'use strict'

// Assert Library
var chai = require('chai');
var expect = chai.expect;

"lib"
var fileParse = require('../src/fileRead');

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
		done();
  });

  });


});
