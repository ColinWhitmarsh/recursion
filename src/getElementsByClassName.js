// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

	var result = [];

	var checkNodes = function(currentNode) {

		if(currentNode.classList !== undefined) {
			if(currentNode.classList.contains(className)) {
				result.push(currentNode);
			}
		}

		if(currentNode.childNodes.length > 0){
			for (var i = 0; i < currentNode.childNodes.length; i++){
				checkNodes(currentNode.childNodes[i]);
			}
		}

		return result;
	}

	return checkNodes(document.body);

};
