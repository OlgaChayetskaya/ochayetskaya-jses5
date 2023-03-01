// When we looked up all the people in our data set that lived more than 90 years,
// only the latest generation in the data came out. Let’s take a closer look at that
// phenomenon.
// Compute and output the average age of the people in the ancestry data set
// per century. A person is assigned to a century by taking their year of death,
// dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
// For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes
// the group for an element in the array and returns an object that maps group
// names to arrays of group members.

var ancestry = JSON.parse(require("../../../ext/ancestry"));

function averageCenturyAge(array) {
  var byCentury = {};

  array.forEach(function (person) {
    var century = Math.ceil(person.died / 100);

    if (!byCentury[century]) {
      byCentury[century] = [];
    }

    byCentury[century].push(person.died - person.born);
  });

  function average(array) {
    function plus(a, b) {
      return a + b;
    }
    return array.reduce(plus) / array.length;
  }

  for (var item in byCentury) {
    byCentury[item] = average(byCentury[item]);
  }

  return byCentury;
}

//console.log(averageCenturyAge(ancestry));


//////////////// bonus //////////////////
function groupBy(array, func) {
  var newArray = {};

  array.forEach(function (person) {
    if (!newArray[func(person)]) {
      newArray[func(person)] = [];
    }
    newArray[func(person)].push(person);
  });
  return newArray;
}

function century(person) {
  return Math.ceil(person.died / 100);
}

//console.log("group by ", groupBy(ancestry, century));
