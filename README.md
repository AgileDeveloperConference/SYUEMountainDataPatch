# Parse Data
##專門將xml , csv資料存放至parse

##Parse xml to json

`Example`

	var parseFiles = require('parseFiles'); 
 	var parseResult = parseFiles.executeParseXml('you want parse file's dir');
  
 	Array.isArray(parseResult) => true;
