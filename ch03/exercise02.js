function isEven (x) {
	//first define recursive exit conditions
	//if x = 0, then it is considered an even number
	if (x === 0) {
		return true;
	//if x = 1, then it is considered an odd number
	} else if (x === 1) {
		return false;
	//if x < 0, then convert to positive integer and pass to function recursively
	} else if (x < 0) {
		return isEven(-x);
	//if above tests fail, call function recursively to iterate through numbers
	} else {
		return isEven(x - 2);
	}
}