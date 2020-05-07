const ftoc = function(degrees) {
  let temp = (degrees - 32) * (5/9);
  return parseFloat(temp.toFixed(1));
}

const ctof = function(degrees) {
  let temp = degrees * (9/5) + 32;
  return parseFloat(temp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
