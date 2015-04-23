function arrayToList (arr) {

	//create list object with only null value
	var list = null;

	//create list from the inside out -- iterate over the array argument bacckward
	for (var i = arr.length - 1; i >= 0; i--) {

		//create list
		list = { value: arr[i], rest: list };
	}

	return list;
}