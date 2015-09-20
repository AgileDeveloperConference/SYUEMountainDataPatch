
'use strict';

var fs = require('fs'),
	path = require('path'),
	xml2js = require('xml2js'),
	$ = require('jquery-deferred');

var	encode = "utf8",
	parser = new xml2js.Parser();

module.exports = {
	executeParseXml:function(dirPath){
			var deferred = new $.Deferred(),
					count = 0,
					fileName = "",
					filePath = "",
					parseResult = [],
					tempCount =0;

			fs.readdir(dirPath,function(err,files){
				if(typeof files === "undefined")
					files = [];
				if(err){
					console.log(err);
					return;
				}
				
				count = files.length;
				for (var i=0;i<count;i++){
					fileName = files[i];
					console.log("Start Parse : " + fileName);		
					filePath = path.join(dirPath,fileName);
						fs.readFile(filePath,encode,function(err,file){
							if(err){
								console.log(err);
								return;
							}
							parser.parseString(file,function(err,result){
								if(err){
									console.log(err);
									return;
								}
							  parseResult.push(result);
							  tempCount ++;	
								if(tempCount === count){
									deferred.resolve(parseResult);			
								}	
							});								
						});		
				}	
			});
		return deferred;
  }
};




