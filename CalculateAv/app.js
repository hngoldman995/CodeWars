// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = array.reduce((acc, c) => acc + c, 0)
    if (array.length === 0){
        return 0
    }else{
        
        return sum / array.length 
    }
  }