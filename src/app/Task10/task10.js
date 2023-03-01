// Using the example data set from this chapter, compute the average age difference between
// mothers and children (the age of the mother when the child is
// born). You can use the average function defined earlier in this chapter.
// Note that not all the mothers mentioned in the data are themselves present
// in the array. The byName object, which makes it easy to find a person’s object
// from their name, might be useful here.

var ancestry = JSON.parse(require('../../../ext/ancestry'));

function averageMomAge(array) {
  var byName = {};

  array.forEach(function (person) {
    byName[person.name] = person;
  });

  function average(array) {
    function plus(a, b) {
      return a + b;
    }
    return array.reduce(plus) / array.length;
  }

  function hasMontherData(array) {
    return array.filter(function (person) {
      return byName[person.mother] != null;
    });
  }

  function motherAge(mother, childYear) {
    //console.log(mother.name, "mom year", mother.born);
    return childYear - mother.born;
  }

  function age(p) {
    //console.log("person", p.name, "year", p.born, "mom", p.mother);
    return motherAge(byName[p.mother], p.born);
  }

  return average(hasMontherData(array).map(age));
}

console.log(averageMomAge(ancestry));
