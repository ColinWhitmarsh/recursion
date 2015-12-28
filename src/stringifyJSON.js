// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    if(typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
      return String(obj);
    
    } else if(typeof obj === 'string'){
      return '"'+obj+'"'
    
    } else if(Array.isArray(obj)) {
      var result = [];
        obj.forEach(function(val) {
          result.push(stringifyJSON(val));
        });
      return "[" + result + "]";
    
    } else if(typeof obj === 'object'){
      var result = '';
      for (var key in obj) {
      	if(typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        	result = result + '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ','
        }
      }
      result = result.slice(0,-1);
      return "{" + result + "}";
    
    }
};
