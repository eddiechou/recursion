// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // If array
	if (Array.isArray(obj)) {
  	var result = '[';
  	if (obj.length) {
  		result += stringifyJSON(obj[0]);
  	}
  	for (let i=1; i<obj.length; i++) {
  		result += ',' + stringifyJSON(obj[i]);
  	}
  	result += ']';
  	return result;
  } else {
  	switch(typeof obj) {

  		case 'boolean':
  			return (obj === true) ? "true" : "false";

  		case 'number':
  			return '' + obj;

  		case 'function':
  			return 'function';

  		case 'object':
  			if (obj === null) {
  				return 'null';
  			} else if (Object.keys(obj).length === 0) {
  				return "{}";
  			} else {
				var result = '{';
				var firstProperty = true;
  				for (var prop in obj) {
  					// Extra check in case property is in prototype
  					if(obj.hasOwnProperty(prop)){
  						if(prop === "functions" || prop === "undefined") continue;
  						if(!firstProperty){
  							result += ','
  						}
  						// Concatenate property key
  						result += '"' + prop + '":';
  						// Concatenate property value
  						if(typeof obj[prop] === 'string') {
  							result += '"' + obj[prop] + '"';
  						} else {
  							result += stringifyJSON(obj[prop]);
  						}
  						firstProperty = false;
  					}

  				}
  				result += '}';
  				return result;
  			}

  		case 'string':
  			return '"' + obj + '"';

  		case 'undefined':
  			return 'undefined';
  	}
  }
};
