
'use strict';

var fs = require('fs'),
	path = require('path'),
	xml2js = require('xml2js'),
	$ = require('jquery-deferred');

var	encode = "utf8",
	parser = new xml2js.Parser();

module.exports = {
	executeParseXml:function(dirPath){
			var deferred = new $.Deferred();
			fs.readdir(dirPath,function(err,files){
				if(typeof files === "undefined")
					files = [];
				if(err){
					console.log(err);
					return;
				}
				var count = files.length;
				var file = "";
				for (var i=0;i<count;i++){
					file = files[i];
					console.log("Start Parse : " + file);		
					var filePath = path.join(dirPath,file);
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
								deferred.resolve(result);			
							});								
						});		
				}	
			});
		return deferred;
  }
};




