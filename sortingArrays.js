//sort the array numerically (the sorted array should equal [1, 2, 5, 9, 10])

var array = [10, 2, 5, 1, 9];

array.sort(function(a,b){
  return a - b;
});

console.log(array);

//This works the way it does because whenever "a" is less than "b",
// a negative value is returned, which results in the smaller elements
// always appearing to the left of the larger ones, in other words, ascending.
// Note that we defined our sort function in this case directly inside the sort()
// method as an anonymous function, instead of creating an explicit function and
// passing it into sort()- both accomplish the same thing.

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Write a sorting function (sometimes called a custom comparator),
// that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.