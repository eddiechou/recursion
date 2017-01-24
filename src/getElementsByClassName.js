// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Use document.body, element.childNodes, and element.classList
// .classList returns class names of an element
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var element = document.body;

  // Search classList for matches
  if(element.hasChildNodes){
  	var children = element.children;
  	console.log(children);
  	for (let i = 0; i < children.length; i++) {
  		if (children[i] === undefined) continue;
		if (children[i].classList.contains(className)) {
			result.push(element[i]);
		}
  	}
  }


  return result;
};
