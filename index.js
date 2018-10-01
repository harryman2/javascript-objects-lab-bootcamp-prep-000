var recipes = {};
 var obj = {};
var object = {prop: 1, prop2: 2};
function updateObjectWithKeyAndValue(object, key, value){
  
  // object = Object.assign({prop: 1, prop2: 2}, obj);
   return object;
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

   //$.extends(true, object.prop2, {prop1: 1, prop2: 2});
     object.prop2({key, value});
     return object;
  
}