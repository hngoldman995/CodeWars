// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram(test, original) {
    return test.toLowerCase().split("").sort().join("") === 
    original.toLowerCase().split("").sort().join("");
}



function sumtoin(num){
   let sum = 0
   for(let i = 0; i <= num; i++){
    sum += i
   }
   return sum
}


function strinng(str){
    return str.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '').length
}





function product(arr){
    return arr.reduce( function (product, value){ return product * value })
}