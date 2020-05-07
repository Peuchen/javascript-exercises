const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (typeof(startNum) != "number" || typeof(endNum) != "number") {
        return "ERROR";
    }
    else if (startNum <0 || endNum <0) {
        return "ERROR";
    }
    else if (startNum > endNum) {
        for (i = endNum; i <= startNum; i++) {
            sum += i;
        }
    }
    else {
        for (i = startNum; i <= endNum; i++) {
            sum += i;
        }
    };
    return sum;
}

module.exports = sumAll
