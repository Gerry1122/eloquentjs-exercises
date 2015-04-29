var arrays = [[1, 2, 3], [4, 5], [6]];

//reduce takes a callback function and passes the previous & current values
arrays.reduce(function (prev, curr) {

	//return the previous value (an array) concatenated with the current value
	//the concat method returns a new array
	return prev.concat(curr);

});