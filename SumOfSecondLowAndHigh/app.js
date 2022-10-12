// create a function that takes in an array of numbers, alert the sum of the second lowest and second highest number

function sumOfSecondLowAndHigh(arr) {
    let sorted = arr.sort((a, b) => a - b)
    console.log(sorted[1] + sorted.length - 2)
}
