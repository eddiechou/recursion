// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Use document.body, element.childNodes, and element.classList
// .classList returns class names of an element
var getElementsByClassName = function(className) {
	var result = [];
	checkNode(document.body);

	function checkNode(node) {

		// Check if the node has the className in its classList
		var classList = node.classList;
		for (var iter in classList) {
			if (classList[iter] === className) {
				result.push(node);
				break;	// Don't want to push duplicates
			}
		}

		// Recursively call checkNode for all the node's children
		if (node.hasChildNodes()) {
			var children = node.childNodes;
			for (let i = 0; i < children.length; i++) {
				checkNode(children[i]);
			}
		}
	}

	return result;
};