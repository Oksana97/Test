const arr = ["Adam", "Alex","Monte", "Aaron", "Ben", "Carl", "Dan",  "Tim","David", "Edward", "Fred", "Frank", "George", "Hal", "Ike", "John", "Alex","Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto",  "Peter", "Roger",  "Steve",  "Ben","Thomas", "Tim", "Ty", "Victor", "Walter"];
let length = arr.length;












function getUniqueArray(_array)
{
  // in the newArray get only the elements which pass the test implemented by the filter function.
  // the test is to check if the element's index is same as the index passed in the argument.
  let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
  return newArray
}
let myArray = ["Adam", "Alex","Monte", "Aaron", "Ben", "Carl", "Dan",  "Tim","David", "Edward", "Fred", "Frank", "George", "Hal", "Ike", "John", "Alex","Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto",  "Peter", "Roger",  "Steve",  "Ben","Thomas", "Tim", "Ty", "Victor", "Walter"];
console.log(getUniqueArray(myArray));







const arr = ["Adam", "Alex","Monte", "Aaron", "Ben", "Carl", "Dan",  "Tim","David", "Edward", "Fred", "Frank", "George", "Hal", "Ike", "John", "Alex","Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto",  "Peter", "Roger",  "Steve",  "Ben","Thomas", "Tim", "Ty", "Victor", "Walter"];
 o = {}
arr.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
console.log(o)
