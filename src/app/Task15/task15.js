// Sequence interface
// Design an interface that abstracts iteration over a collection of values. An
// object that provides this interface represents a sequence, and the interface
// must somehow make it possible for code that uses such an object to iterate
// over the sequence, looking at the element values it is made up of and having
// some way to find out when the end of the sequence is reached.
// When you have specified your interface, try to write a function logFive that
// takes a sequence object and calls console.log on its first five elements—or fewer,
// if the sequence has fewer than five elements.
// Then implement an object type ArraySeq that wraps an array and allows
// iteration over the array using the interface you designed. Implement another
// object type RangeSeq that iterates over a range of integers (taking from and to
// arguments to its constructor) instead.

function ArraySeq(array) {
  this.array = array;
  this.counter = 0;
}
ArraySeq.prototype.end = function () {
  return this.counter >= this.array.length;
};

ArraySeq.prototype.element = function () {
  return this.array[this.counter];
};

ArraySeq.prototype.next = function () {
  this.counter++;
};

function logFive(item) {
  for (var i = 0; i < 5; i++) {
    if (!item.end()) {
      console.log(item.element());
      item.next();
    } else {
      break;
    }
  }
}

function RangeSeq(from, to) {
  this.from = Math.min(from, to);
  this.to = Math.max(from, to);
}

RangeSeq.prototype.end = function () {
  return this.from >= this.to;
};

RangeSeq.prototype.element = function () {
  return this.from;
};

RangeSeq.prototype.next = function () {
  this.from++;
};

// logFive(new ArraySeq(["A", "B", "C", 1, 2, 3, 4, 5])); 
// logFive(new RangeSeq(100, 105));
