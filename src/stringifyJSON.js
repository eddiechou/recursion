// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  switch(typeof obj) {
  	case 'boolean':
  		return (obj === true) ? "true" : "false";
  	case 'number':
  		return '' + obj;
  		break;
  	case 'object':
  		if (obj === null) {
  			return 'null';
  		}
  		break;
  	case 'string':
  		return '"' + obj + '"';
  		break;
  	case 'undefined':
  		return 'undefined';
  		break;
  	case 'function':
  		return '';
  		break;


  }
};
