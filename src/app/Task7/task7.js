// Write a function arrayToList that builds up a data structure like the previous
// one when given [1, 2, 3] as argument, and write a listToArray function that
// produces an array from a list. Also write the helper functions prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list, or undefined when there is no such
// element.
// If you haven’t already, also write a recursive version of nth

function arrayToList(array) {
  var myList = null;

  for (var len = array.length; len > 0; len--) {
    myList = { value: array[len - 1], rest: myList };
  }

  return myList;
}

function listToArray(list) {
  var myArray = [];

  for (var node = list; node; node = node.rest) {
    myArray.push(node.value);
  }

  return myArray;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(number, list) {
  var i = 0;
  for (var node = list; node; node = node.rest) {
    if (i === number) {
      return node.value;
    }
    i++;
  }
  return undefined;
}

function nthNew(number, list) {
  return  number === 0 ? list.value : (list.rest ? nthNew(number - 1, list.rest):undefined)
}

