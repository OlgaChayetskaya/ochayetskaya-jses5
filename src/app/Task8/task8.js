// The == operator compares objects by identity. But sometimes, you would prefer
// to compare the values of their actual properties.
// Write a function, deepEqual, that takes two values and returns true only if
// they are the same value or are objects with the same properties whose values
// are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the === operator
// for that) or by looking at their properties, you can use the typeof operator. If
// it produces "object" for both values, you should do a deep comparison. But
// you have to take one silly exception into account: by a historical accident,
// typeof null also produces "object".

function isObject(arg) {
  return typeof arg == "object" && arg != null;
}

function deepEqual(arg1, arg2) {
  if (isObject(arg1) && isObject(arg2)) {
    if (Object.keys(arg1).length !== Object.keys(arg2).length) {
      console.log("different length");
      return false;
    } else {
      for (var x in arg1) {
        if (!(x in arg2)) {
          console.log("different properties");
          return false;
        }
      }
      for (var x in arg1) {
        if (!deepEqual(arg1[x], arg2[x])) {
          console.log("different value of the property");
          return false;
        }
      }
      console.log("equal objects");
      return true;
    }
  }
  return arg1 === arg2;
}
