const removeFromArray = function(array, ...values) {
    for (i = 0; i < values.length; i++) {
        if (array.includes(values[i])) {
            let position = array.indexOf(values[i]);
            array.splice(position, 1);
        }
    }
    return array;
}

module.exports = removeFromArray
