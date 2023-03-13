// Implement a cell type named StretchCell(inner, width, height) that conforms to
// the table cell interface described earlier in the chapter. It should wrap another
// cell (like UnderlinedCell does) and ensure that the resulting cell has at least the
// given width and height, even if the inner cell would naturally be smaller.

var MOUNTAINS = require("../../../ext/mountains");

function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}
function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);
  function drawLine(blocks, lineNo) {
    return blocks
      .map(function (block) {
        return block[lineNo];
      })
      .join(" ");
  }
  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0]
      .map(function (_, lineNo) {
        return drawLine(blocks, lineNo);
      })
      .join("\n");
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++) result += string;
  return result;
}
function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function () {
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function () {
  return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function () {
  return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height);
};

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};

function dataTable(data, width, height) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlinedCell(
      new StretchCell(new TextCell(name), width, height)
    );
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      var value = row[name];
      // This was changed :
      if (typeof value == "number")
        return new StretchCell(new RTextCell(String(value)), width, height);
      else return new StretchCell(new TextCell(String(value)), width, height);
    });
  });
  return [headers].concat(body);
}

//console.log(drawTable(dataTable(MOUNTAINS, 20, 1)));
