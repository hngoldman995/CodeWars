//Simple, remove the spaces from the string, then return the resultant string

function noSpace(str) {
    return str.split(' ').join('')
}

function findNeedle(haystack) {
    return "found the needle at position" + ' ' + haystack.indexOf(needle)
}

function bool(arr) {
    return arr.filter(boolean)
}

function squareDigit(num) {
    return num.toString().split('').map(i => i * i).join()
}

function reverseNum(num) {
    return num.toString().split(' ').reverse()
}

let onlyEvens = arr => arr.filter(n % 2 === 0)