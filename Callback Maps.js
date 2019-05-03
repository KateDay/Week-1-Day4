var words = ["ground", "control", "to", "major", "tom"];

function map(first, callBack) {
  var emptyArray = [];
  for (var i = 0; i < first.length; i++) {
    emptyArray.push(callBack(first[i]));
  }
  return emptyArray;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));


/*[6, 7, 2, 5, 3]
[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/
