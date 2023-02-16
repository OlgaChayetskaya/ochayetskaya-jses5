// Write a function arrayToList that builds up a data structure like the previous
// one when given [1, 2, 3] as argument, and write a listToArray function that
// produces an array from a list. Also write the helper functions prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list, or undefined when there is no such
// element.
// If you haven’t already, also write a recursive version of nth

function arrayToList(array) {
  var myList = null,
    len;

  len = array.length;

  for (len; len > 0; len--) {
    myList = { value: array[len - 1], rest: myList };
  }

  return myList;
}

function listToArray(list) {
  var myArray = [],
    i = 0;
  for (var node = list; node; node = node.rest) {
    myArray[i] = node.value;
    i++;
  }

  return myArray;
}

function prepend(element, list) {
  var myList = list;
  myList = { value: element, rest: myList };
  return myList;
}

function nth(number, list) {
  for (var node = list; node; node = node.rest) {
    if (node.value === number) {
      return node;
    } 
  }
  return undefined;
}


