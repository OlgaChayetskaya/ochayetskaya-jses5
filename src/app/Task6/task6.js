// Arrays have a method reverse, which changes the array by inverting the order
// in which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
// produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies the
// array given as argument in order to reverse its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one is more efficient?

function reverseArray(array) {
  var myArray = [];
  for (var i = 0; i < array.length; i++) {
    myArray.unshift(array[i]);
  }
  return myArray;
}

function reverseArrayInPlace(array) {
  var temp, middle, end;

  middle = Math.floor(array.length / 2);
  end = array.length - 1;

  for (var i = 0; i < middle; i++) {
    temp = array[i];
    array[i] = array[end - i];
    array[end - i] = temp;
  }
  console.log(array);
}


