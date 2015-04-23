function reverseArray(arr) {
	//create empty array variable
	var newArr = [];

	//loop through array values, starting at the end of the array
	for (var i = arr.length - 1; i >= 0; i--) {

		//push values to empty array
		newArr.push(arr[i]);
	}

	//return reversed array
	return newArr;
}

function reverseArrayInPlace (arr) {

	//loop through array argument; only update the first and last few values -- middle value should remain the same
	//this is done by dividing the length of the array in two and rounding down
	for (var i = 0; i < Math.floor(arr.length / 2); i++) {

		//store the current array value in a variable
		var currValue = arr[i];

		//set the current array value to the analagous value at the end of the array; i.e. the first value will be set to have the last value
		arr[i] = arr[arr.length - 1 - i];

		//set the value at the end of the array to the current loop value variable
		arr[arr.length -1 - i] = currValue;
	}

	//return reversed array
	return arr;
}