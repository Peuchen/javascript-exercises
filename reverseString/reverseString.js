const reverseString = function(str) {
    let output = str.split("").reverse().join("");
    return output;
}

module.exports = reverseString
