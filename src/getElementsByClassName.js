// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, body = document.body) {
  //debugger;
  var output = [];
  //var children = body.childNodes;
  //console.log(children.length);
  var helper = function (node) {
    if (node.classList && node.classList.contains(className)) {
      output.push(node);
    }
    if (node.childNodes) {
      node.childNodes.forEach(function(child) {
        return helper(child);
      });
    }
  };
  helper(body);
  return output;
};
  
  
  
  // if (body.classList.contains(className) && body.classList !== undefined) {
  //   output.push(body);
  // } 
  
  // children.forEach(function(child){
  //   if (children[i].classList !== undefined && children[i].classList.contains(className)) {
  //     output.push(children[i]);
  //   }
  //   if (children[i].childNodes.length > 0) {
  //     output = output.concat(getElementsByClassName(className, children[i]));
  //   }
  // })
  // return output;
  // if (childs[0] !== undefined) {
  //   getElementsByClassName(childs[0]);
  // }
  //console.log('mine', output);

// check if parent has className
  //if it does push to output
//check if parent has childNodes
  //if it does loop through all childs
  //use recursion on each child
//if parent has NO childNodes
  //return output
