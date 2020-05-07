const repeatString = function(str, n) {
    let output = ""

    if (n < 0) {
        return "ERROR";
    }

    for (i = 1; i <= n; i++) {
        output += str;
    }
    return output
}

module.exports = repeatString
