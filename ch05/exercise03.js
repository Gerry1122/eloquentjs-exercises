//same function from the previous exercise
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function deathInfo (arr) {
    //create an empty object for the results
    var centuries = {};
    
    //iterate through the array values with map
    arr.map(function (person) {

        //create a variable and store the person's century of death
        var pCentury = Math.ceil(person.died / 100);

        //create a variable and store the person's age at death
        var pAge = person.died - person.born;
        
        //if the century value does not already exist in the object
        if (!(pCentury in centuries)) {

            //then insert the century and set its value to an array with the current person's age
            centuries[pCentury] = [pAge];

        } else {

            //if the century already exists as a key in the object, then push the current person's age to the array for that key
            centuries[pCentury].push(pAge);
        }
    });
    
    //for each of the keys / properties in the object:
    for (var key in centuries) {

        //log the key and call the average function on the array of ages
        //toFixed will cut round down the number to the nearest thousandth
        console.log(key + ': ' + average(centuries[key]).toFixed(3));
    }
};