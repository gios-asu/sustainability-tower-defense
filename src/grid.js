// create grid object, and since canvas is 800x600, that means 20x15 grid of 40x40 [0-39] slots.

var grid = new Array(20);
for (var i = 0; i < 20; i++) {
  grid[i] = new Array(15);
}

// default all slots to empty

for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 15; j++) {
    grid[i][j] = "empty";
  }
}
