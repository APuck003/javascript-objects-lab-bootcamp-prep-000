var recipes = {prop: 1};

// function updateObjectWithKeyAndValue(object, key, value) {
//   return Object.assign({}, object, {[key]: value});
// }

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value;
//   return object;
// }

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

deleteFromObjectByKey(recipes, 'prop')

// function deleteFromObjectByKey(object, key) {
  
// }

// function destructivelyDeleteFromObjectByKey(object, key) {
  
// }


// function destructivelyDeleteFromObjectByKey(object, key) {
  
// }






