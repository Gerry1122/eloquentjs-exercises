var deepEqual = function (x, y) {
  if (x === y) {
    return true;
  } else if (typeof x !== typeof y) {
    return false;
  }  
    var xP = 0;
    var yP = 0;
 
    //iterate through to count values properties in x
    for (var key in x) {
      xP += 1;
    }
 
    //iterate through to count values properties in y    
    for (var key in y) {
      yP += 1;
      //compare the current property in y to the property in x
      //if that doesn't work, recursively call the function and pass the values
      if (!(key in x) || !deepEqual(x[key], y[key])) {
        return false;
      }
    }
  //return true if the number of properties in each is the same
  return xP === yP;
};
 
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true