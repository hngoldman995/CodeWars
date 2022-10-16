// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// function reverseWords(str){
//     return str; // reverse those words
//   }


//psuedo code

/*
    function reverseWords(str){
  // Split string into array of elements based on the words, not letters
  //reverse order of elements in the array
  //join the array elements back together into a string
  //return the string
}
*/

function reverseWords(str) {
    let arr = str.split(' ').reverse()
    let newStr = arr.join(' ')
    return newStr;
}

