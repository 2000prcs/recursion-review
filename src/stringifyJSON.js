// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //find data type by using if statement
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  //for number, typeof = number 
  //use string concatanation '' + 9
  //using Array.isArray to check if it's array 
    if (obj.length === 0) {
      return '' + '[]';
    } else if (obj.length > 0) {
      var output = [];
      for (var i = 0; i < obj.length; i++) {
        output.push(stringifyJSON(obj[i]));
      }
      return '[' + output + ']';
    }
  } else if (obj instanceof Object) {
    if (Object.keys(obj).length === 0) {
      return '' + '{}';
    } else {
      var keys = Object.keys(obj);
      var output = '';
      // for(var key in obj){
      for (var i = 0; i < keys.length; i++) {
        if (obj[keys[i]] instanceof Function || obj[keys[i]] === undefined) {
          return '' + '{}';
        }
        if (keys.length === 1) {
          output += '"' + keys[i] + '"' + ':' + stringifyJSON(obj[keys[i]]);
        } else {
          if (i === keys.length - 1) {
            output += '"' + keys[i] + '"' + ':' + stringifyJSON(obj[keys[i]]);
          } else {
            output += '"' + keys[i] + '"' + ':' + stringifyJSON(obj[keys[i]]) + ',';
          }
        }
        
      }
      return '{' + output + '}';
    }
  }
  return obj;
  //if it's an array return an empty array 
  //if item is in array, iterate through the array
};
