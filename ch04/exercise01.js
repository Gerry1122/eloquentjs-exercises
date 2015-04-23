function range (start, end, step) {
	//initialize empty array
	var array = [];

	//if there is not a step argument provided, use 1
	if (!step) {
		step = 1;
	}

	if (step < 0) {
		//if the step provided is negative, then iterate downward from start to end
		for (var i = start; i >= end; i += step) {
			
			//push numbers to array
			array.push(i);
		}
	} else {
		//if the step provided is positive, then iterate upward from start to end
		for (var j = start; j <= end; j += step) {
			
			//push numbers to array
			array.push(j);
		}
	}

	//return populated array
	return array;
}

function sum (arg) {
	//create sum variable
	var arraySum = 0;

	//iterate through array argument
	for (var i = 0; i < arg.length; i++) {

		//add the current array value to the sum
		arraySum += arg[i];
	}

	//return the sum of all numbers in the array
	return arraySum;
}