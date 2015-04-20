//first countBs function
function countBs (str) {
	//set counter
	var bCount = 0;
	//iterate through each letter of the string argument
	for (var i = 0; i < str.length; i++) {
		//if the current string character = 'B', then add 1 to the counter
		if (str.charAt(i) === 'B') {
			bCount += 1;
		}
	}

	//return counter value after iteration
	return bCount;
}

//second part of answer
function countChar (str, letter) {
	//set ounter
	var count = 0;
	//iterate through eacah letter of the string argument
	for (var i = 0; i < str.length; i++) {
		//if the current string character = the letter argument, then add 1 to the counter
		if (str.charAt(i) === letter) {
			count += 1;
		}
	}

	//return counter value after iteration
	return count;
}

function countBs (a) {
	//call countChar function, passing in countBs argument and looking for the letter 'B'
	return countChar(a, 'B');
}