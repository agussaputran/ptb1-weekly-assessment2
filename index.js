function removeFirstAndLastCharacter(stringParam) {
    // tambahan code dibawah ini
    var newStr = stringParam.slice(1, -1);
    // returning a value of string
    return newStr
}

// call the function
console.log(removeFirstAndLastCharacter("malam"))

// expected output
// "ala"
//test1
// testgit