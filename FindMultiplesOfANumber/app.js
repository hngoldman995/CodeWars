// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

/*
function fineMultiples(integer, input){
    //create an empty array placeholder
    //loop through that array
    //determine which values are multiples of the base
    //push these values to the array
    //return the array of values

}

*/
//run tests

function findMultiples(int, limit) {
    let multiples = [];
    for (let i = int; i <= limit; i += int) { multiples.push(i); }
    return multiples;
}

