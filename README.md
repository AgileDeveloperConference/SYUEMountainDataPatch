
[![Build Status](https://travis-ci.org/AgileDeveloperConference/SYUEMountainDataPatch.svg?branch=master)](https://travis-ci.org/AgileDeveloperConference/SYUEMountainDataPatch)

# Parse Data
##專門將xml , csv資料存放至parse

##Parse xml to json

`Example`

	var parseFiles = require('parseFiles'); 
 	var parsePromise = parseFiles.executeParseXml('you want parse file's dir');
  	parsePromise.done(function(parseDatas){
  	   //回傳的資料為陣列，數量為你資料夾中xml檔來決定。 
  	   console.log(Array.isArray(parseDatas))
  	});
 	
