
'use strict';

var fs = require('fs'),
	path = require('path'),
	xml2js = require('xml2js'),
	$ = require('jquery-deferred');

var	encode = "utf8",
	parser = new xml2js.Parser();

var executeParseXml = function(dirPath){

			var deferred = new $.Deferred(),
					count = 0,
					fileName = "",
					filePath = "",
					parseResult = [],
					tempCount =0;
		
		readDirAndParseXml(dirPath);
		return deferred;
		
		function readDirAndParseXml(dirPath){
			fs.readdir(dirPath,function(err,files){
				if(typeof files === "undefined")
					files = [];
				if(err) throw err;
				
				count = files.length;
				for (var i=0;i<count;i++){
					fileName = files[i];
					filePath = path.join(dirPath,fileName);
					readXmlFile(filePath,encode);
				}	
			});
		}

		function readXmlFile(filePath,encode){
			fs.readFile(filePath,encode,function(err,file){
					if(err) throw err;
					parseXml(file);
			});		
		}

		function parseXml(file){	
			parser.parseString(file,function(err,result){
					if(err) throw err;
					parseResult.push(result);
					tempCount ++;	
					if(tempCount === count){
					deferred.resolve(parseResult);			
					}	
			});								
		}

};


module.exports = {
	executeParseXml:executeParseXml
};


