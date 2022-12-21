// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//reduce method
function positiveSum(arr) {
    let newNum = arr.filter(e => e > 0);
    let sum = newNum.reduce(function (x, y) {
        return x + y
    }, 0)
    return sum
}

//for loop
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                  // add arr[i] to total
        }
    }
    return total;                         // return total
}

//filter and reduce 
function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}
