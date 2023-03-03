// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes x and y parameters (numbers), which it should save to properties of
// the same name.
// Give the Vector prototype two methods, plus and minus, that take another
// vector as a parameter and return a new vector that has the sum or difference
// of the two vectors’ (the one in this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (anotherVector) {
  return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
};
Vector.prototype.minus = function (anotherVector) {
  return new Vector(this.x - anotherVector.x, this.y - anotherVector.y);
};
Object.defineProperty(Vector.prototype, "vectorLength", {
  get: function () {
    return Math.sqrt(this.x**2 +this.y**2)
  },
});

// var myVector = new Vector(1, 2);
// var hisVector = new Vector(2, 5);
// console.log(
//   myVector.plus(hisVector),
//   myVector.minus(hisVector),
//   myVector.vectorLength
// );
