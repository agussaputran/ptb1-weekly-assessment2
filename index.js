// remove first and last character of string using built-in method
function removeFirstAndLastCharacterUsingMethod(stringParam) {
    return stringParam.substring(1, stringParam.length-1);
}

// remove first and last character of string using for ... loop
function removeFirstAndLastCharacterUsingLoop(stringParam) {
    let arr = ''
    for (var i = 1; i < stringParam.length-1; i++) {
        arr += stringParam[i]
    }
    return arr
}

const initialString = 'Las Vegas'

const strUsingMethod = removeFirstAndLastCharacterUsingMethod(initialString)
const strUsingLoop = removeFirstAndLastCharacterUsingLoop(initialString)

console.log(strUsingMethod) // expected output: 'as Vega'
console.log(strUsingLoop) // expected output: 'as Vega'
