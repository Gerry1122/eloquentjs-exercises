//one of the two functions provided by the text
//will use reduce to compute the average of values in an array
function average(array) {

	//helper function that will sum all values in the array
	function plus(a, b) { return a + b; }

	//get average by dividing sum of all values by the length of the passed array argument
	return array.reduce(plus) / array.length;
}

//second function provided by the text
//create empty object
var byName = {};

//iterate through the ancestry data set
ancestry.forEach(function(person) {
	//for each value in the array, set the name of the object equal to the person.name property from the array
	byName[person.name] = person;
});

//filter on the ancestry data to only return records that have a value for mother
var newArray = ancestry.filter(function(person) {
	//could not get the function to work correctly in jsfiddle with the !== operator; need to experiment more
	return byName[person.mother] != null;

  //transform the array by returning the birth date of the current array value
  //by subtracting that value from the birthdate of the mother from the byName object created earlier
}).map(function(person) {
	return person.born - byName[person.mother].born;
});