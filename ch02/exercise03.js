//set board size
var size = 8;
var board = '';

//iterate through assigned board size for each row
for (var i = 1; i <= size; i++) {
	//if it's an even row:
	if (i % 2 === 0) {
		//iterate through the assigned size and assign specified value for even and odd values
		for (var j = 1; j <= size; j++) {
			if (j % 2 === 0) {
				board += '#';
			} else {
				board += ' ';
			}
		}
		//add line break at the end of the line
		board += '\n';
	//if it's an odd row:
	} else {
		//iterate through the assigned size and assign specified value for even and odd values
		for (var k = 1; k <= size; k++) {
			if (k % 2 === 0) {
				board += ' ';
			} else {
				board += '#';
			}
		}
		//add line break at the end of the line
		board += '\n';
	}
}

console.log(board);