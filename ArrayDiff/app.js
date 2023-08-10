
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

function numToStr(num){
    return String(num).split('').reverse()
}





function mexWav(str){
    let arr = []
    for(let i = 0; i <= str.length; i++){
        let copy = str.split('')
        copy[i] === copy[i].toUpperCase()
        copy.join()
        
    }
    return arr.push(copy)
}

function checkArr(arr, limit){
    return arr.every( x => x <= limit)
}

function reduce(arr){
    return arr.reduce(function (x, y){ return x * y})
}


function sameO(str){
    let X = str.replace(/[xX]/g, '').length
    let O = str.replace(/[oO]/g, '').length
    if (X === O); 
    
}


