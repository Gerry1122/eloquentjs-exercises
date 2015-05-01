function every (arr, func) {

    //iterate through the array argument
    for (var i = 0; i < arr.length; i++) {

        //if the end of the array is reached and the final value is true
        //this means that all values up to the end of the array passed
        if (i === arr.length - 1 && func(arr[i])) { 

            //then return true
            return true;

        //else if any of the array values do not pass the function test argument
        } else if (!(func(arr[i]))) {

            //return false
            return false;
        }
    }
};

function some (arr, func) {

    //iterate through the array argument
    for (var i = 0; i < arr.length; i++) {

        //if any of the array values return a true value for the function argument
        if (func(arr[i])) {

            //return true
            return true;
        } else {
            return false;
        }
    }
};

console.log('test 1 = ' + every([NaN, NaN, NaN], isNaN)); //true
console.log('test 2 = ' + every([NaN, NaN, 4], isNaN)); //false
console.log('test 3 = ' + some([NaN, 3, 4], isNaN)); //true
console.log('test 4 = ' + some([2, 3, 4], isNaN)); //false