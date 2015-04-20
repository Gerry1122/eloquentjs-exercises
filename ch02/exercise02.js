//iterate from 1 - 100
for (var i = 1; i < 101; i++) {
	//log FizzBuzz if divisible by 3 & 5
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	//log Buzz if divisible by 5
	} else if (i % 5 === 0) {
		console.log('Buzz');
	//log Fizz if divisible by 3
	} else if (i % 3 === 0) {
		console.log('Fizz');
	//if no other conditions are met, log the number
	} else {
		console.log(i);
	}
}