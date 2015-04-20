//set first string value
var str = '#';
console.log(str);

//iterate until there are 7 characters in the str variable
for (var i = 1; str.length < 7; i++) {
  //add an additional # to str with each iteration
  str += '#';
  //log variable to console
  console.log(str);
}